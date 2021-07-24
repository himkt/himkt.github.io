import * as React from 'react'


const publications = [
    <p><strong>平松淳</strong> and 原島純. <strong>レシピ解析の現状と課題: Cookpad Parsed Corpus を例として</strong>.言語処理学会年次大会, 2021.</p>,
    <p>Jun Harashima, <strong>Makoto Hiramatsu</strong>. <strong>Cookpad Parsed Corpus: Linguistic Annotations of Japanese Recipes</strong>. In Proceedings of Linguistic Annotation Workshop, 2020 (to appear).</p>,
    <p>Yasuhiro Yamaguchi, Shintaro Inuzuka, <strong>Makoto Hiramatsu</strong>, Jun Harashima. <strong>Non-ingredient Detection in User-generated Recipes using the Sequence Tagging Approach</strong>. In Proceedings of Workshop on Noisy User-generated Text, 2020.</p>,
    <p>Jun Harashima, <strong>Makoto Hiramatsu</strong> and Satoshi Sanjo.<strong>Calorie Estimation in a Real-World Recipe Service</strong>.In Proceedings of Annual Conference on Innovative Applications of Artificial Intelligence, 2020</p>,
    <p>若林啓, 竹内誉羽, <strong>平松淳</strong> and 中野幹生.<strong>言語モデルによる文の最適分割に基づく音声言語理解</strong>.人工知能学会全国大会, 2019.</p>,
    <p><strong>Makoto Hiramatsu</strong>, Kei Wakabayashi and Jun Harashima.<strong>Named entity recognition by character-based word classification using a domain specific dictionary</strong>.In Proceedings of International Conference on Computational Linguistics and Intelligent Text Processing, 2019.</p>,
    <p><strong>平松淳</strong>, 若林啓 and 原島純.<strong>文字分散表現に基づく単語分類情報を用いたレシピ固有表現抽出</strong>.自然言語処理研究会, 2018.</p>,
    <p><strong>Makoto Hiramatsu</strong> and Kei Wakabayashi.<strong>Encoder-decoder neural networks for taxonomy classification</strong>.In Proceedings of Workshop on SIGIR 2018 eCom Data Challenge, 2018.</p>,
    <p><strong>平松淳</strong> and 若林啓.<strong>系列ラベリングによる自然言語文からの上位下位関係自動抽出</strong>.言語処理学会年次大会, 2017.</p>,
    <p><strong>平松淳</strong>, 山本修平, 伏見卓恭 and 佐藤哲司.<strong>レシピコミュニティにおける投稿傾向の分析</strong>.電子情報通信学会技術研究報告, 2016.</p>
]
    .map((publication, number) => <li key={number}>{publication}</li>)


const Publication = () => (
    <section style={{padding: 3 + 'rem'}}>
    <div className="container">
        <div className="columns">
            <div className="column"></div>
            <div className="column is-8 is-centered">
            <div className="content">
                <hr className="hr" style={{marginBottom: 0}} />
                <h1 className="title is-2">Publication</h1>
                <ol>{publications}</ol>
            </div>
            </div>
            <div className="column"></div>
        </div>
        </div>
    </section>
)


export default Publication
