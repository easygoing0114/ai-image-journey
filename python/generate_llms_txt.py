#!/usr/bin/env python3
"""
Blogger の Atom (JSON) フィードから記事一覧を取得し、
リポジトリ直下に llms.txt を生成するスクリプト。

Cloudflare Pages がリポジトリ直下(root)をそのままミラー配信しているため、
出力先はリポジトリのルート (llms.txt) とする。
"""

import json
import re
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

FEED_URL = (
    "https://www.ai-image-journey.com/feeds/posts/default"
    "?alt=json&max-results={n}&start-index={start}"
)
MAX_TOTAL = 500        # 取得する記事の上限
PAGE_SIZE = 150         # Blogger APIの1回あたり最大取得数
RECENT_COUNT = 15       # llms.txt に個別掲載する「最新記事」件数

# リポジトリ直下に出力（Cloudflare Pages の配信ルートと一致させる）
OUTPUT_PATHS = [
    Path("llms.txt"),
]

SITE_TITLE = "AI Image Journey"
SITE_SUMMARY = (
    "A technical blog exploring AI image generation, covering Stable Diffusion, "
    "Flux, Krea, HiDream, Qwen-Image, Z-Image, and the ComfyUI ecosystem."
)
SITE_DESCRIPTION = (
    "Written by Easygoing. Focus areas: local AI image generation models "
    "(checkpoints, licenses, color/VAE precision comparisons), ComfyUI workflows "
    "and custom nodes (ComfyUI-easygoing-nodes), Linux setup for AI workloads "
    "(Pop!_OS), and practical image-editing tooling (inpainting, upscaling, "
    "background removal)."
)


def strip_html(html: str) -> str:
    """簡易HTMLタグ除去 + 空白正規化"""
    text = re.sub(r"<[^>]+>", " ", html or "")
    text = re.sub(r"\s+", " ", text).strip()
    return text


def fetch_all_posts():
    posts = []
    start = 1
    while start <= MAX_TOTAL:
        url = FEED_URL.format(n=PAGE_SIZE, start=start)
        req = urllib.request.Request(url, headers={"User-Agent": "llms-txt-bot"})
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.load(resp)

        entries = data.get("feed", {}).get("entry", [])
        if not entries:
            break

        for e in entries:
            title = e.get("title", {}).get("$t", "").strip()
            link = next(
                (l["href"] for l in e.get("link", []) if l.get("rel") == "alternate"),
                None,
            )
            summary_html = (
                e.get("summary", {}).get("$t")
                or e.get("content", {}).get("$t")
                or ""
            )
            summary = strip_html(summary_html)[:200]
            published = e.get("published", {}).get("$t", "")

            if title and link:
                posts.append(
                    {"title": title, "url": link, "summary": summary, "published": published}
                )

        if len(entries) < PAGE_SIZE:
            break
        start += PAGE_SIZE

    # 公開日の新しい順に並べる
    posts.sort(key=lambda p: p["published"], reverse=True)
    return posts


def categorize(posts):
    """タイトル/URLキーワードでざっくり分類"""
    categories = {
        "Model Reviews & Comparisons": [],
        "ComfyUI Workflows & Nodes": [],
        "Environment & Tooling (Linux, Python, etc.)": [],
        "Other Articles": [],
    }

    model_keywords = [
        "flux", "krea", "hidream", "qwen", "sdxl", "stable diffusion",
        "z-image", "anima", "mellow", "wai-illustrious", "upscal",
        "fp8", "mxfp8", "vae",
    ]
    comfyui_keywords = ["comfyui", "node", "sam", "birefnet", "lama", "depth-anything", "iopaint"]
    tooling_keywords = ["linux", "pop!_os", "python", "cuda", "cloudflare"]

    for p in posts:
        haystack = (p["title"] + " " + p["url"]).lower()
        if any(k in haystack for k in comfyui_keywords):
            categories["ComfyUI Workflows & Nodes"].append(p)
        elif any(k in haystack for k in model_keywords):
            categories["Model Reviews & Comparisons"].append(p)
        elif any(k in haystack for k in tooling_keywords):
            categories["Environment & Tooling (Linux, Python, etc.)"].append(p)
        else:
            categories["Other Articles"].append(p)

    return categories


def render_llms_txt(posts) -> str:
    lines = []
    lines.append(f"# {SITE_TITLE}")
    lines.append("")
    lines.append(f"> {SITE_SUMMARY}")
    lines.append("")
    lines.append(SITE_DESCRIPTION)
    lines.append("")

    # 最新記事セクション
    lines.append("## Recent Articles")
    for p in posts[:RECENT_COUNT]:
        summary = p["summary"] or "No summary available."
        lines.append(f"- [{p['title']}]({p['url']}): {summary}")
    lines.append("")

    # カテゴリ別（最新以降の記事から）
    remaining = posts[RECENT_COUNT:]
    categories = categorize(remaining)
    for cat_name, items in categories.items():
        if not items:
            continue
        lines.append(f"## {cat_name}")
        for p in items:
            summary = p["summary"] or "No summary available."
            lines.append(f"- [{p['title']}]({p['url']}): {summary}")
        lines.append("")

    # 固定ページ
    lines.append("## Tools")
    lines.append("- [Image Difference Checker](https://www.ai-image-journey.com/p/image-difference-checker.html): Compare two images and highlight differences.")
    lines.append("- [Web Page to Markdown](https://www.ai-image-journey.com/p/web-page-to-markdown.html): Convert a web page into Markdown format.")
    lines.append("")

    lines.append("## Gallery")
    lines.append("- [Upscaler Compare](https://www.ai-image-journey.com/p/upscale-model.html): Side-by-side comparison of AI upscaling models.")
    lines.append("- [Deep Colors](https://www.ai-image-journey.com/p/deep-colors.html): Color-depth focused image gallery.")
    lines.append("")

    lines.append("## About")
    lines.append("- [Sitemap](https://www.ai-image-journey.com/p/sitemap.html): Full list of site content.")
    lines.append("- [Update History](https://www.ai-image-journey.com/p/update-history.html): Changelog of site updates.")
    lines.append("")

    lines.append("## Optional")
    lines.append("- [Terms of Service](https://www.ai-image-journey.com/p/disclaimer.html)")
    lines.append("- [Privacy Policy](https://www.ai-image-journey.com/p/privacy-policy.html)")
    lines.append("- [Links / Portfolio](https://www.ai-image-journey.com/p/links.html)")
    lines.append("")

    generated_at = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    lines.append(f"<!-- Generated automatically on {generated_at} -->")

    return "\n".join(lines)


def main():
    posts = fetch_all_posts()
    content = render_llms_txt(posts)

    for path in OUTPUT_PATHS:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")
        print(f"Wrote {path} ({len(content)} bytes, {len(posts)} posts found)")


if __name__ == "__main__":
    main()