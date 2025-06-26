// フォントの存在確認を行う関数（Canvas API使用）
function checkFontAvailability(fontName) {
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

// 優先フォントの存在確認
function hasPreferredMonospaceFonts() {
  const preferredFonts = ['SFMono-Regular', 'Menlo', 'Monaco'];
  
  for (const font of preferredFonts) {
    if (checkFontAvailabilityModern(font) || checkFontAvailability(font)) {
      return true;
    }
  }
  
  return false;
}

// Fira Codeの存在確認
function hasFiraCode() {
  return checkFontAvailabilityModern('Fira Code') || checkFontAvailability('Fira Code');
}

// メイン処理：必要に応じてFira CodeのCSSを読み込み
function loadFiraCodeIfNeeded() {
  // Fira Codeが既に存在する場合は何もしない
  if (hasFiraCode()) {
    console.log('Fira Code is already available');
    return;
  }
  
  // 優先フォントが存在する場合は読み込まない
  if (hasPreferredMonospaceFonts()) {
    console.log('Preferred monospace fonts are available');
    return;
  }
  
  // Fira Codeも優先フォントも存在しない場合のみ読み込み
  console.log('Loading Fira Code CSS...');
  
  Defer.css('https://files.ai-image-journey.com/css/fira_code_500.css', 'fira_code_css', 100);

}

// 実行
loadFiraCodeIfNeeded();