// フォントの存在確認を行う関数
function checkFontAvailability(fontName) {
  // Canvas APIを使用してフォントの存在を確認
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  // テスト用の文字列
  const testString = 'abcdefghijklmnopqrstuvwxyz0123456789';
  
  // フォールバックフォント（確実に存在するフォント）でのサイズを測定
  context.font = '72px monospace';
  const fallbackWidth = context.measureText(testString).width;
  
  // 指定フォントでのサイズを測定
  context.font = `72px "${fontName}", monospace`;
  const testWidth = context.measureText(testString).width;
  
  // 幅が異なればフォントが存在する
  return fallbackWidth !== testWidth;
}

// CSS Font Loading API を使用する方法（モダンブラウザ対応）
function checkFontAvailabilityModern(fontName) {
  if (!document.fonts || !document.fonts.check) {
    return false;
  }
  
  try {
    return document.fonts.check(`1em "${fontName}"`);
  } catch (e) {
    return false;
  }
}

// 優先フォントリストをチェック
function checkPreferredFonts() {
  const preferredFonts = ['SFMono-Regular', 'Menlo', 'Monaco', 'Fira Code'];
  
  for (const font of preferredFonts) {
    // モダンブラウザではCSS Font Loading APIを優先使用
    if (checkFontAvailabilityModern(font) || checkFontAvailability(font)) {
      console.log(`Font available: ${font}`);
      if (font === 'Fira Code') {
        return true; // Fira Codeが既に利用可能
      }
      if (font !== 'Fira Code') {
        return true; // 他の優先フォントが利用可能
      }
    }
  }
  
  return false; // 優先フォントが見つからない
}

// .language-クラス（mermaid以外）の存在確認
function hasCodeBlocks() {
  const languageElements = document.querySelectorAll('[class*="language-"]');
  
  for (let element of languageElements) {
    const classList = Array.from(element.classList);
    for (let className of classList) {
      if (className.startsWith('language-') && className !== 'language-mermaid') {
        return true;
      }
    }
  }
  
  return false;
}

// メイン処理
function loadFiraCodeIfNeeded() {
  // コードブロックが存在しない場合は何もしない
  if (!hasCodeBlocks()) {
    return;
  }
  
  // 優先フォントが利用可能かチェック
  const hasFiraCode = checkFontAvailabilityModern('Fira Code') || checkFontAvailability('Fira Code');
  const hasPreferredFonts = checkPreferredFonts();
  
  // Fira Codeが存在しないが、他の優先フォントもない場合のみ読み込み
  if (!hasFiraCode && !hasPreferredFonts) {
    console.log('Loading Fira Code CSS...');
    Defer.css('https://files.ai-image-journey.com/css/fira_code_500.css', 'fira_code_css', 100);
  }
}

// DOM読み込み完了後に実行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadFiraCodeIfNeeded);
} else {
  loadFiraCodeIfNeeded();
}