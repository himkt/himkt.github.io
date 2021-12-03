import Layout from "../templates/layout"


const Career = () => (
    <Layout>
        <section style={{padding: 3 + 'rem'}}>
        <div className="container">
            <div className="columns">
                <div className="column"></div>
                <div className="column is-8 is-centered">
                <div className="content">
                    <hr className="hr" style={{marginBottom: 0}} />
                    <h1 className="title is-2">応募したもの</h1>
                    <ol>
                        <p>2021/01 <strong>エムスリー株式会社(オファー)</strong>．オファー面談で一緒に働きたいと思っていた人の退職を知る．現職でもやりたいことがあったこと，生活と雇用形態が合わなかったのでお断りした．エムスリーはすごく興味ある会社なので，またいつか話をききに行きたい</p>
                        <p>2021/06 <strong>Ubie 株式会社（一次面接落ち）</strong>．副業でお世話になっていて，本選考もどう？と誘っていただいたのがきっかけで応募した．誘ってくれた人に対して「自分（himkt）には無理だと思うのですが，尊敬する人たちと働きたいという気持ちで応募します」みたいなことを言った記憶がある．自走力がたりないというフィードバックとともに落ちた．精進します．</p>
                        <p>2021/06 <strong>アマゾンジャパン合同会社（一次面接落ち）</strong>．なんかふとアマゾンジャパンの検索チームの募集が目に入り応募．検索チームは即書類落ちするも SDE ポジションでどう？と声をかけていただき選考したもらった．コーディング試験は余裕をもって解けたと思う．でも **behavioral interview** にぼこぼこにされた（英語力がなさ過ぎて慌てて頭が真っ白になってしまった）．そのあとの技術面接も頭真っ白でどうにもならなかった．黒歴史を手に入れた．．．精進します．</p>
                    </ol>
                </div>
                </div>
                <div className="column"></div>
            </div>
            </div>
        </section>
    </Layout>
)

export default Career
