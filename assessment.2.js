'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した要素の子どもを全て削除する
 * @param {HTMLElement} element HTMLの要素
 */
 function removeAllChildren(element) {
  while (element.firstChild) {
    // 子どもの要素があるかぎり削除
    element.removeChild(element.firstChild);
  }
}


assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  if (userName.length === 0) {
    // 名前が空の時は処理を終了する
    return;
  }

  // 診断結果表示エリアの作成
  while (resultDivided.firstChild) {
    // 子どもの要素があるかぎり削除
    resultDivided.removeChild(resultDivided.firstChild);
  }
  
  const header = document.createElement('h3');
  header.innerHTML = '診断結果';
  resultDivided.appendChild(header);
  header.className = ('header-style');

  const paragraph = document.createElement('p');
  const result = assessment(userName);
  paragraph.innerHTML = result;
  resultDivided.appendChild(paragraph);
  paragraph.className = ('paragraph-border');



};

userNameInput.onkeydown = event => {
  if (event.key === 'Enter') {
    // ボタンのonclick() 処理を呼び出す
    assessmentButton.onclick();
  }
};

const answers = [
  '<strong>{userName}</strong>のいいところは声です。<br><strong>{userName}</strong>の特徴的な声は皆を惹きつけ、心に残ります。<br><img src="img/utakuma.png" alt="" id="" class="anspng">',
  '<strong>{userName}</strong>のいいところはまなざしです。<br><strong>{userName}</strong>に見つめられた人は、気になって仕方がないでしょう。<br><img src="img/kirakira_woman.png" alt="" id="" class="anspng">',
  '<strong>{userName}</strong>のいいところは情熱です。<br><strong>{userName}</strong>の情熱に周りの人は感化されます。<br><img src="img/jonetsu.png" alt="" id="" class="anspng">',
  '<strong>{userName}</strong>のいいところは厳しさです。<br><strong>{userName}</strong>の厳しさがものごとをいつも成功に導きます。<br><img src="img/kanabou.png" alt="" id="" class="anspng">',
  '<strong>{userName}</strong>のいいところは知識です。<br>博識な<strong>{userName}</strong>を多くの人が頼りにしています。<br><img src="img/chishiki.png" alt="" id="" class="anspng">',
  '<strong>{userName}</strong>のいいところはユニークさです。<br><strong>{userName}</strong>だけのその特徴が皆を楽しくさせます。<br><img src="img/hengao.png" alt="" id="" class="anspng">',
  '<strong>{userName}</strong>のいいところは用心深さです。<br><strong>{userName}</strong>の洞察に、多くの人が助けられます。<br><img src="img/youjin.png" alt="" id="" class="anspng">',
  '<strong>{userName}</strong>のいいところは見た目です。<br>内側から溢れ出る<strong>{userName}</strong>の良さに皆が気を惹かれます。<br><img src="img/mitame.png" alt="" id="" class="anspng">',
  '<strong>{userName}</strong>のいいところは決断力です。<br><strong>{userName}</strong>がする決断にいつも助けられる人がいます。<br><img src="img/ketsudan.png" alt="" id="" class="anspng">',
  '<strong>{userName}</strong>のいいところは思いやりです。<br><strong>{userName}</strong>に気をかけてもらった多くの人が感謝しています。<br><img src="img/omoiyari.png" alt="" id="" class="anspng">',
  '<strong>{userName}</strong>のいいところは感受性です。<br><strong>{userName}</strong>が感じたことに皆が共感し、わかりあうことができます。<br><img src="img/kanjusei.png" alt="" id="" class="anspng">',
  '<strong>{userName}</strong>のいいところは節度です。<br>強引すぎない<strong>{userName}</strong>の考えに皆が感謝しています。<br><img src="img/setsudo.png" alt="" id="" class="anspng">',
  '<strong>{userName}</strong>のいいところは好奇心です。<br>新しいことに向かっていく<strong>{userName}</strong>の心構えが多くの人に魅力的に映ります。<br><img src="img/koukishin.png" alt="" id="" class="anspng">',
  '<strong>{userName}</strong>のいいところは気配りです。<br><strong>{userName}</strong>の配慮が多くの人を救っています。<br><img src="img/kikubari.png" alt="" id="" class="anspng">',
  '<strong>{userName}</strong>のいいところはその全てです。<br>ありのままの<strong>{userName}</strong>自身がいいところなのです。<br><img src="img/arinomama.png" alt="" id="" class="anspng">',
  '<strong>{userName}</strong>のいいところは自制心です。<br>やばいと思ったときにしっかりと衝動を抑えられる<strong>{userName}</strong>が皆から評価されています。<br><img src="img/jiseishin.png" alt="" id="" class="anspng">',
  '<strong>{userName}<strong>のいいところは優しさです。<br><strong>{userName}</strong>の優しい雰囲気や立ち振る舞いに多くの人が癒やされています。<br>画像'
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
  // 全文字のコード番号を取得してそれを足し合わせる
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode += userName.charCodeAt(i);
  }

  // 文字のコード番号の合計を回答の数で割って添字の数値を求める
  const index = sumOfCharCode % answers.length;
  let result = answers[index];

  result = result.replaceAll('{userName}', userName);
  return result;
  
}


function tweetAnswers (str) {
  for (let j = 0; j >= result.length; j++) {
    if(j = !(str.match)){
      j = result.slice(j);
    }
  }
}
