class LinkPreviewGenerator {
    constructor(workerUrl) {
    this.workerUrl = workerUrl;
    this.baseDomain = 'ai-image-journey.com';
    this.BLOGGER_IMAGE_DOMAIN = 'blogger.googleusercontent.com';

    this.CUSTOM_IMAGES = {
        // GitHub
        'github.com/easygoing0114/ComfyUI-easygoing-nodes': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2-Ke0XZtUMjfrpXvkpA9-ZXO-Qry7earNIk0FZL6ONGbG-pCXczX4iCGjLRv1TDkEDpoGpBbHQdORAeU7sF0nCoi2rhsGY6VWuwYgLPH2RpI7QTW1n7H2YCjRGRyONmj__31IqWCJZ92aZbXnhfDB41pbUv-RHzEABMtloc5hVbNU1Q/w400-e90-rw/easygoing_icon.png',
        'github.com/easygoing0114/ComfyUI-AutoMask': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEify2s6Q9BMH8lAH_x8zTefRPFGfGUDO1bqBaziH4-RUc4y-lvPTm4okQ1AQEwSt6apP51nFJuWCJfXqKst8v5bJaAjN2bS6aTd5mAR1eTdkctZtRCVYr-tIzMwbIRQPaEWqE9oRxUEX_5bgHu_9hBtMOKZ211xnYLcqjjcQ802xe-BFg/w400-e90-rw/BiRefNet_DepthAnythingV3_Refine_black_bg_compare.png',
        'github.com/easygoing0114/ComfyUI-cliption-integrated': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSSPTV49cZESo8VZ11cOGZNw7CvUcO604lIe6tkdkhncNxm2pMkZ3UMFkiQi2HcaIzTZnpirgfVmvuzu9S_bUXtxOPZU6MTQjzhmynZbupoN_vj72O86AeTCdNK6ja2NxZSFjgjBQMAPAiTt4prTxjKW09aQ5j_Xh2EzCBS7JkQSuauQ/w400-e90-rw/cliption_icon.png',
        'github.com/easygoing0114/ComfyUI-uit-hidream-o1': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHx7vBSfBcmhHyGQkN-tkS9_sylxDpS4KIlziDc3Gx4cz1GSkgY8Ydaqzjiu210Vsk-UYkU86faPgurDwzHLngIqZO4DQ4DZiFyOJxZDUZkQx4xy9HZ6NusKLuoF0hlgs5QJSsFMpf3k_I3LkPiGaZHPvhxRxDZi4JUTdQrd0povX9Ow/w400-e90-rw/ComfyUI-uit-hidream-o1_banner_21_9_new_photoreal.png',

        // Hugging Face models
        'huggingface.co/bluepen5805/blue_pencil-flux1': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ff1638f0-0295-45e8-b038-d7f376f26873/ComfyUI_00023_.jpeg',
        'huggingface.co/bluepen5805/anima_pencil-xl': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/48499ad8-33bb-4a2c-aac8-af6c6edcc280/00494-20240625200426-223644773-30-5.jpeg',
        'huggingface.co/bluepen5805/blue_pencil-xl': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/55619f31-4395-4e9b-a94d-208460a9f7d2/00494-20240623160056-880978405-30-5.jpeg',
        'huggingface.co/bluepen5805/noob_v_pencil-XL': 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5d4020ad-6777-4077-b53e-4432e9263d45/00000-20241211153415-1954655588-30-5.jpeg',
        'huggingface.co/zer0int': 'https://cdn-avatars.huggingface.co/v1/production/uploads/6490359a877fc29cb1b09451/b-oU9m0-ceQQ1tyt2G_pq.png',
        'huggingface.co/easygoing0114/HiDream_HQ-models': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzPF0z6moB5p4_DSWEE4Rgxn2gAfXnLBfTTNUZksVbIOgZ8Zzv-kYczpyNmvguaadFKJVMS-Fn3RDT01njmbbmo0BdDR5ud7eoinBveD6AVJTXzT6LtuTn2eDoZvECnknSwafftBoebrBjD_MSpvKyswlwNeDumzpveAuOcYpJjDHLTg/w400-e90-rw/HiDream_I1-Dev_clear_anime_compare.png',
        'huggingface.co/easygoing0114/flan-t5-xxl-fused': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcXz7nKUsCisd5moS160_QTJFK5JjGiY6blVSbMlfWgwhAuYYC0xVt3cema6WMQwFDPx8snM5jAdo5ftFGHOFVrJDDQuTmLCn5Zg5HX4_cO9vf4Nl58T04LDVQB8VIMWRnqZfAcSmfDxRKimxmzeRQH9cS7qbldoXOmBhUCnVXuAnWaw/w400-e90-rw/Flan-T5xxl_00020_.png',
        'huggingface.co/easygoing0114/HiDream-I1-Dev_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEji_XSe_Vz4JW98Whg3MRvpZprPRvVRZA_erQAYNsg9F8ptC2Jn_JMEb0-y6ZeZBJ96sV28fywJd11NQ5fH3zawPlcn0U6cVPd21en5xDCCGMFU3jtqSy7FFlPgFz416aTf-08DV9srkjv6aktdbSCq3IHGvVhGBwMtXIS11DXFzPfWcQ/w400-e90-rw/HiDream_clear_00012_.png',
        'huggingface.co/easygoing0114/animagine-xl-4.0-opt-clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhq9am8PTLvZsx1SIV8haxgOtx6ZB7LmGQxIgJGxXy53a6Wcf7ftqN3ejWn_rF_keOQpxMsdlG98T3t2TvJbCYIwowCKtw5twxRS_gzWI10yICKwadeQ-wiarAhi2fUGPoRjohTZzLddenh9_DcG19gYyJFBCykLvFxUxvCoiiDVIgu5A/w400-e90-rw/Hitman1_close_up.png',
        'huggingface.co/easygoing0114/anima_pencil-XL_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiBgy0Fd08Bpx4ZhPJC4gn19mQsbz-WhbahxH3MHWz5EYJSFWE5V-SeBtMbfGj9eXMl8HwKuHFAaWgFU0rsHgShu-S_bWbhryI-VCIoH9Wh-HGlbOG-pFyn5siu8LUJUMLyJ7PX2eZ2LYxXNo1OC5RT2L4UdQPYhGa81Vm02eeclIybQ/w400-e90-rw/anima_pencil-XL_clear_v2_an%20animated%20character%20with%20silver%20hair%20and%20blue%20eyes%20wears%20a%20blue%20military%20-%20style%20uniform%20with%20gold%20accents%20and%20a%20red%20emblem%20close%20up.png',
        'huggingface.co/easygoing0114/Qwen-Image-Edit-2509_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9hEIUyFPYL9zXXEAzP3xFi2l5F0dvgFjEdpayfPVYCvIC46fRvrUBD4VfAcAm7sLnc4Uqz3F42LD4Yw4__p0u2SZrVPKqn1d8pCXL-v-bxzOCbxoWfwIagDTgCFk5zLTACxWHkzfSiqAszB8XhJKZtyNzM4Rb9YJ5HhFm2FMqD9VILQ/w400-e90-rw/Qwen-Image-Edit-2509_clear_anime_kimono.png',
        'huggingface.co/easygoing0114/mellow_pencil-XL_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyvOjo_pdMQpxZSy6aTxj6AiTsSW2rL4xizHRo8oWRiAx_sq__HTPt0MF3hHw6yFYCad-F6JoPbG8OtMGnoJDslX15tNGIq2DauAFrKf-VFkhNefMjqBu0ezlyiKICwxNi2CPMTzqq6CAhZvv3QcJI3bHh5LWQLL8DgVXBFAW3oMnLpQ/w400-e90-rw/an_animated_female_character_with_red_hair_and_blue_eyes_holds_a_bouquet_of_red_roses,_wearing_a_white_blouse_with_lace_and_a_blue_ribbon,_against_a_dark_square.png',
        'huggingface.co/easygoing0114/SDXL_anime_clear_vae': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi5w8U9Gl8JLLsUqXv6P4otxRNobob2NK-vW93mtPVrH1pQU0EJUtnQi6IlXknjo3q1QMTPZZZpTpD2cAr-K6C1Q0O1RfTcL-KkPrFC6DfvLc0t2F6DFz_Jus5lvannJBM6AjvW7EyNJR4FH0qbpZv6Z23_gTA8D7r3RnynebDDikldA/w400-e90-rw/mellow_pencil-XL-v1.0.0-base_clear_00660_.png',
        'huggingface.co/easygoing0114/Z-Image_clear_vae': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_RktUvKxwH_tr3WsKf_SrOXe2ZOwYlrL8dk69e_TBI3fKU6kNA1dKtroSUZQfo11uS-vZOZkdyGfJEB35nGTh1qDJZ_L6Zkb0rGQaf9oiDO1bpi-Q5vYJ0_1FAEYf9LNG80MSHWOk9ouIcQBzrIetcjNyZz6vNSFHV6M-UCBqSPQLag/w400-e90-rw/Z-Image-Turbo_clear_vivid_vae_photo.png',
        'huggingface.co/easygoing0114/Z-Image-Turbo_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbRZWjOvWuNSND5imJe4tTbU2-v5JkDfbQIkxHJr7RoockZXZnzqF0uUQxK8U-LpBZwtVjAP7UeNS9-w7xZgkXR7DDhSXZ319Fcb9WKH-7o_B6p30A05mhVhBq31xJa4iwCn9myfZ_EBL01HCz65x6-m7CCMTua2uciASEDEmZfWhgYw/w400-e90-rw/Z-Image-Turbo_FP32_clear_vivid_vae_photoreal.png',
        'huggingface.co/easygoing0114/animagine-xl-3.0_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHyjrGmoBb0ZeYgIuCJJouC3iUYvOROj-HSGQXUb8jT8kOoR6aCYVp_NCdHFoidd_Cor_xOfFIsnShe1-4g6SxuXH5bfkq0H3gUDqw2Hl986GQ_s0-vp5LiIXWmIJ4FhwDs95iHito6rBSjeTGuCMrTo2nV52-AUqwUTU7iqbczh2M6w/w400-e90-rw/a%20female%20animated%20character%20with%20blue%20hair%20and%20blue%20eyes%20wears%20a%20black%20outfit%20with%20gold%20embellishments%20and%20a%20fur%20collar%20square.png',
        'huggingface.co/easygoing0114/qwen_image_clear_vae': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeQC5AeEaC1CXr9sqdIaWrJMTQKkzHnxSRkSwVW-VpBel35PvAA5RdTX_abc4IxGqPGYw059PiqDjqROwpbXWbNDAZtiIszEjN3QiSTB8bPh5RNZtVgT08v8C7l2amiP-SQQ2M0UQzsY8QraTTWMDHvH51QN-Z3PKlpbTh0PhLvHrfXQ/w400-e90-rw/clear_vae.png',
        'huggingface.co/easygoing0114/Qwen-Image-Edit-2511_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLa46YF4wGAYIDbvgU3CHqKDG8RlvpXev-FrnltBFyYwnGqqtweyoan2Zr2Ii_4CjsDffvJcZc5bQb-jHFpYOj-rVxJqRUu0HufV70cy_y_Mc43N41uGNy-nl7X4My16fm7nSqpfKQkSCsEqkMMqyHw3JagdgaCvZmqGak0_X_EnTmmA/w400-e90-rw/upscale_00053_.png',
        'huggingface.co/easygoing0114/FLUX.2-klein-4B_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCGjlcmcry8meWHFykKbxjytK79sbEwD_rrsVLxHameG8oq2sO5wC47RnQtyDM02Jlo1bO7hnHChhN18XWACFBcORLBAOxh9E3zB5PPYWrdFw8pdakA8YqTq0wDH21XReGzE-fAHaKtYkmA7bZEvmNRypnEyu-Nw_vLeuUYEEyY6Gpqg/w400-e90-rw/upscale_00087_.png',
        'huggingface.co/easygoing0114/Z-Image_clear_photoreal': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0d6j23FOhiHS1CwrxOo8UvsHAZMKJ4Ryxiu_t4ZlwqQzRjPMyrL-X91HiN5_pRtfCuC8HHddGvfc4KPTxz8EvOmD03LKGTzh6GfHV8NijdMntkqUYNfJ88ERrqatvXgvJYh83OPtXrFA5p_ShReSwBufZov6zS_H-lCvF24mx_vZt0Q/w400-e90-rw/Z-Image_clear_photoreal_upscale_10.png',
        'huggingface.co/easygoing0114/Z-Image_clear_anime': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8LlBvKQrZnRh5mVoC97GMC6jcb9aNTQHHGSNOK0jXHUbGItwK3wPRQDXSspiq1xRvU7b3kWQgJmOLR5bz4FYgjWUPrrki5YjTNMedyZJjegAPG7eamggVgfm5bALSSujw2BtWVwyldDaHz_tvqMeWbRT891eQ3ELH55vlTYOzIryCRg/w400-e90-rw/FP32_upscale3.png',
        'huggingface.co/easygoing0114/Krea-2-Turbo_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh07nwBKrwerYDx6zuZ3zhw4ZmL8RE-LySYVht99enX1YImpXggoJHxuW09cwUvzcyoonx9DkWEH9I4QWuiRQcQj-J1fG3D-Qh3Z2c-0ArrCYMQTy105hT6r2wETzYwswRG2WBPCEAgbcVXznHbpVwVfPWsX05UJddPYabm-CZoxbkArw/w400-e90-rw/Krea2-Turbo_clear_Krea2-Turbo_clear_hires_00134_.png',
        'huggingface.co/easygoing0114/Krea-2-Nippon_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhe5G0eNDcSrJmecbL6BG9ebG57FE5NhVWD2xnINXxrWAsKow8vQwQ3JVAJEdBohyydKddkCCcnO65YnAu9YI-2Z9UEml3VRVA1VB5EAaMQUyKP1C1Rtbs0tUdIoBYLtbGw3tEf86-_PMynwEcvyZgQH5w7ZFie2gNR2iMByaeqk8utqw/w400-e90-rw/BF16_00002_.png',
        'huggingface.co/easygoing0114/MOSS-Image-SFT_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPkk2POJb7d6vpjMnxpiK5ML22z5iSdkwwPIW1Q-r17vGlVzVMm7iRUDSEHzaemt9SCQam7G2pvkFrcQGFTiNzUe9u67lc5RguP7I9xVU9Kbmw6a5scavjcwpN5zK19Jg1tG9IwYnw1FvPS_Vw88QZdJyhyFleuTWXkBjuRLzEBWt_rQ/w400-e90-rw/MOSS-Image-SFT_clear_cover_image_photoreal.png',
        'huggingface.co/easygoing0114/HiDream-O1-Image_clear_v2': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5-fCRqCZXx7IMwVt6ChuTzwvPCozs6wIAIKV18_hMxpBt6daymmI2072dXHRvX7ai-fi84yptTamc7kLvZd95FtsppMuYAIHy5JOceaAFLzstbloNbjXXOVRf2MLw-h5q5bod4FXtawTdLtZDwNOow1cU7a0PeudRPD8tvHEzKTfBdQ/w400-e90-rw/HiDream-O1-Image_clear_v2_BF16_00001_.png',
        'huggingface.co/easygoing0114/HiDream-O1-Image_clear': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLs9ueGvN5kumQuRuFvwSVFMa7v1dEUTRHz4h-7yzdHW8mrnQHqOc475uQYocMFEYeRqSy8gt5p5KexmdKhMu_PxrjacK_nI5AfbxhdUZmA5mDhdRCP1p-y2iLKTQ4MPm__2x3y53zoneAMXGiSBc7QRmTbiNJM_NZUMYeHO0CG5FmQg/w400-e90-rw/HiDream-O1-Image_clear_v1_original_00113_.png',

    };
    }

    getCustomImage(url) {
    try {
        const urlLower = url.toLowerCase();

        for (const [path, image] of Object.entries(this.CUSTOM_IMAGES)) {
        if (urlLower.includes(path.toLowerCase())) {
            return image;
        }
        }

        return null;
    } catch (error) {
        return null;
    }
    }

    getMetadataImage(metadata) {
    if (!metadata) return null;
    return metadata.thumbnail ||
        metadata.ogImage ||
        metadata.twitterImage ||
        metadata.firstImage ||
        null;
    }

    createCardHTML(metadata) {
    const isInternal = this.isSameDomain(metadata.url);

    let imageUrl = this.getCustomImage(metadata.url);

    if (!imageUrl) {
        imageUrl = this.getMetadataImage(metadata);
    }

    if (imageUrl) {
        imageUrl = imageUrl.replace(/s1600|w0-e90-rw|w800-e90-rw|w1200-e90-rw/g, 'w400-e90-rw');
    }

    const displayDomain = metadata.domain === `www.${this.baseDomain}`
        ? this.baseDomain
        : metadata.domain;

    const linkClass = `blogcard-link${imageUrl ? '' : ' blogcard-link-no-image'}`;

    const imageHTML = imageUrl ? `
        <div class="blogcard-image-container">
            <img class="blogcard-image" src="${imageUrl}"
            alt="link page thumbnail image" width="400" height="400" />
        </div>
    ` : '';

    return `
        <figure class="blogcard blogcard-auto">
        <a class="${linkClass}" href="${metadata.url}"
            ${isInternal ? '' : 'target="_blank" rel="noopener noreferrer"'}>
            ${imageHTML}
            <div class="blogcard-content">
            <p class="blogcard-title">${metadata.title}</p>
            <blockquote cite="${metadata.url}">
                <p class="blogcard-description">${metadata.description}</p>
            </blockquote>
            <div class="blogcard-footer">
                <img src="https://www.google.com/s2/favicons?domain=${metadata.domain}"
                    alt="Favicon" width="16" height="16" />
                ${displayDomain}
            </div>
            </div>
        </a>
        </figure>
    `;
    }

    createFallbackCardHTML(link, url) {
    const linkText = link.textContent.trim() || url;
    const customImage = this.getCustomImage(url);
    const linkClass = `blogcard-link${customImage ? '' : ' blogcard-link-no-image'}`;

    const imageHTML = customImage ? `
        <div class="blogcard-image-container">
            <img class="blogcard-image" src="${customImage}"
            alt="link page thumbnail image" width="400" height="400" />
        </div>
    ` : '';

    return `
        <figure class="blogcard blogcard-auto">
        <a class="${linkClass}" href="${url}"
            target="_blank" rel="noopener noreferrer">
            ${imageHTML}
            <div class="blogcard-content">
            <p class="blogcard-title">${linkText}</p>
            </div>
        </a>
        </figure>
    `;
    }

    async fetchPageData(url) {
    try {
        const response = await fetch(this.workerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
        });

        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.status === 'success' ? data.metadata : null;
    } catch (error) {
        return null;
    }
    }

    async processLink(card) {
    try {
        const link = card.querySelector('a');
        if (!link) return;

        const url = link.getAttribute('href');
        if (!url) return;

        let metadata;
        try {
        metadata = await this.fetchPageData(url);
        } catch (error) {
        metadata = null;
        }

        const cardHTML = metadata ? this.createCardHTML(metadata) : this.createFallbackCardHTML(link, url);

        card.insertAdjacentHTML('afterend', cardHTML);
        card.remove();
    } catch (error) {
    }
    }

    async replaceLinks() {
    const blogcards = document.querySelectorAll('.blogcard-auto');

    const promises = Array.from(blogcards).map((card, index) => {
        return new Promise(resolve => {
        setTimeout(async () => {
            await this.processLink(card);
            resolve();
        }, index * 200);
        });
    });

    await Promise.all(promises);
    }

    isSameDomain(url) {
    try {
        const urlDomain = new URL(url).hostname;
        return urlDomain === this.baseDomain || urlDomain.endsWith(`.${this.baseDomain}`);
    } catch (error) {
        return false;
    }
    }
}

// 実行
const generator = new LinkPreviewGenerator('https://get-blogcard-info-to-blogger.easygoing0114.workers.dev/');
generator.replaceLinks();