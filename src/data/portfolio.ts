export type Project = {
  name: string;
  role: 'Author' | 'Committer' | 'Contributor';
  description: string;
  url: string;
  tags: string[];
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  url?: string;
};

export type Experience = {
  period: string;
  role: string;
  organization: string;
  summary: string;
};

export const profile = {
  handle: 'himkt',
  name: 'Makoto Hiramatsu',
  tagline:
    'Software engineer and researcher in Tokyo. Open-source committer on Optuna, author of Konoha and cafleet.',
  links: [
    { label: 'GitHub', url: 'https://github.com/himkt', icon: 'simple-icons:github' },
    { label: 'X (Twitter)', url: 'https://twitter.com/himkt', icon: 'simple-icons:x' },
    {
      label: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=48jLQIwAAAAJ',
      icon: 'simple-icons:googlescholar',
    },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/himkt', icon: 'fa6-brands:linkedin' },
    {
      label: 'Speaker Deck',
      url: 'https://speakerdeck.com/himkt',
      icon: 'simple-icons:speakerdeck',
    },
    { label: 'Resume', url: '/resume.pdf', icon: 'lucide:file-text' },
  ],
};

export const software: Project[] = [
  {
    name: 'cafleet',
    role: 'Author',
    description: 'Multi-agent orchestrator for Claude Code, Codex, and OpenCode.',
    url: 'https://github.com/himkt/cafleet',
    tags: ['Rust', 'AI agents'],
  },
  {
    name: 'Optuna',
    role: 'Committer',
    description: 'Automatic hyperparameter optimization framework for machine learning.',
    url: 'https://github.com/optuna/optuna',
    tags: ['Python', 'ML'],
  },
  {
    name: 'Konoha',
    role: 'Author',
    description: 'Japanese tokenizer wrapper, adopted by flair for Japanese support.',
    url: 'https://github.com/himkt/konoha',
    tags: ['Python', 'NLP'],
  },
  {
    name: 'pyner',
    role: 'Author',
    description: 'Chainer replication of the BiLSTM-CRF paper (Lample et al., 2016).',
    url: 'https://github.com/himkt/pyner',
    tags: ['Python', 'NER'],
  },
  {
    name: 'Chainer',
    role: 'Contributor',
    description: 'Define-by-run deep-learning framework; implemented EarlyStoppingTrigger.',
    url: 'https://github.com/chainer/chainer',
    tags: ['Python', 'Deep learning'],
  },
  {
    name: 'AllenNLP',
    role: 'Contributor',
    description: 'NLP research library from AI2; author of the allennlp-optuna plugin.',
    url: 'https://github.com/allenai/allennlp',
    tags: ['Python', 'NLP'],
  },
  {
    name: 'flair',
    role: 'Contributor',
    description: 'NLP framework; introduced Japanese tokenization backed by Konoha.',
    url: 'https://github.com/flairNLP/flair',
    tags: ['Python', 'NLP'],
  },
];

export const publications: Publication[] = [
  {
    title: 'Cookpad Parsed Corpus: Linguistic Annotations of Japanese Recipes',
    authors: 'Jun Harashima, Makoto Hiramatsu',
    venue: 'LAW (Linguistic Annotation Workshop)',
    year: 2020,
    url: 'https://aclanthology.org/2020.law-1.8/',
  },
  {
    title: 'Non-ingredient Detection in User-generated Recipes using the Sequence Tagging Approach',
    authors: 'Yasuhiro Yamaguchi, Shintaro Inuzuka, Makoto Hiramatsu, Jun Harashima',
    venue: 'W-NUT (Workshop on Noisy User-generated Text)',
    year: 2020,
    url: 'https://aclanthology.org/2020.wnut-1.11/',
  },
  {
    title: 'Calorie Estimation in a Real-World Recipe Service',
    authors: 'Jun Harashima, Makoto Hiramatsu, Kenta Sanjo',
    venue: 'AAAI / IAAI',
    year: 2020,
  },
  {
    title:
      'Named Entity Recognition by Character-based Word Classification using a Domain Specific Dictionary',
    authors: 'Makoto Hiramatsu, Kei Wakabayashi, Jun Harashima',
    venue: 'CICLing',
    year: 2019,
  },
  {
    title: 'Encoder-Decoder Neural Networks for Taxonomy Classification',
    authors: 'Makoto Hiramatsu, Kei Wakabayashi',
    venue: 'eCom @ SIGIR',
    year: 2018,
  },
];

export type Article = {
  date: string;
  title: string;
  url: string;
  platform: 'Zenn' | 'Qiita' | 'Medium' | 'AllenNLP Guide';
};

export const platformIcons: Record<Article['platform'], string> = {
  Zenn: 'simple-icons:zenn',
  Qiita: 'simple-icons:qiita',
  Medium: 'simple-icons:medium',
  'AllenNLP Guide': 'lucide:book-open',
};

export const writingProfiles = [
  { name: 'Zenn', url: 'https://zenn.dev/himkt' },
  { name: 'Qiita', url: 'https://qiita.com/klis' },
  { name: 'Medium', url: 'https://himkt.medium.com/' },
];

export const articles: Article[] = [
  {
    date: '2026-07',
    title: 'コーディングエージェントにオーケストレーションを任せる',
    url: 'https://zenn.dev/himkt/articles/865063822ef701',
    platform: 'Zenn',
  },
  {
    date: '2026-07',
    title: 'dotfiles のススメ; mise と Renovate で開発環境を安全に最新に保つ編',
    url: 'https://zenn.dev/himkt/articles/b811e1ea846f99',
    platform: 'Zenn',
  },
  {
    date: '2026-05',
    title: 'Claude Code の Agent Teams ぽいものを自分で作ってみたい、ついでに Codex でも使いたい。',
    url: 'https://zenn.dev/himkt/articles/00c6049542170b',
    platform: 'Zenn',
  },
  {
    date: '2025-11',
    title: 'uv build と uv build --sdist --wheel は等価ではない',
    url: 'https://zenn.dev/himkt/articles/93787c26ddd1ef',
    platform: 'Zenn',
  },
  {
    date: '2022-10',
    title: 'VSCode と Rust で快適に AtCoder をするためのプラグインを作った',
    url: 'https://zenn.dev/himkt/articles/8e44abfa5caca7',
    platform: 'Zenn',
  },
  {
    date: '2021-05',
    title: 'Paper management system powered by GitHub Pages and Google Apps',
    url: 'https://himkt.medium.com/paper-management-system-powered-by-github-pages-and-google-apps-5acebecaa5bc',
    platform: 'Medium',
  },
  {
    date: '2020-09',
    title: 'Hyperparameter Optimization chapter in the AllenNLP Guide',
    url: 'https://github.com/allenai/allennlp-guide/pull/138',
    platform: 'AllenNLP Guide',
  },
  {
    date: '2020-08',
    title: 'Hyperparameter Optimization for AllenNLP Using Optuna (PyTorch publication)',
    url: 'https://medium.com/pytorch/hyperparameter-optimization-for-allennlp-using-optuna-acb8d96737e5',
    platform: 'Medium',
  },
  // {
  //   date: '2020-06',
  //   title: 'Hyperparameter optimization for AllenNLP using Optuna (Optuna publication)',
  //   url: 'https://medium.com/optuna/hyperparameter-optimization-for-allennlp-using-optuna-54b4bfecd78b',
  //   platform: 'Medium',
  // },
  {
    date: '2020-05',
    title: 'Optuna で AllenNLP モデルのハイパーパラメータを最適化する',
    url: 'https://himkt.medium.com/optuna-%E3%81%A7-allennlp-%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AE%E3%83%8F%E3%82%A4%E3%83%91%E3%83%BC%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF%E3%82%92%E6%9C%80%E9%81%A9%E5%8C%96%E3%81%99%E3%82%8B-41ad5e8b2d1a',
    platform: 'Medium',
  },
  {
    date: '2020-05',
    title: '日本語解析ツール Konoha に AllenNLP 連携機能を実装した',
    url: 'https://qiita.com/klis/items/f1d29cb431d1bf879898',
    platform: 'Qiita',
  },
  {
    date: '2019-11',
    title: 'トークナイザをいい感じに切り替えるライブラリ konoha を作った',
    url: 'https://qiita.com/klis/items/bb9ffa4d9c886af0f531',
    platform: 'Qiita',
  },
  {
    date: '2019-01',
    title: '読んだ・読む論文の一覧をみたい できるだけ楽に',
    url: 'https://qiita.com/klis/items/05e421593fe4d4aebad0',
    platform: 'Qiita',
  },
  {
    date: '2018-01',
    title: 'chainerにearly stoppingを追加してもらった話',
    url: 'https://qiita.com/klis/items/7865d9e8e757f16bc39c',
    platform: 'Qiita',
  },
  {
    date: '2017-12',
    title: '多クラス交差エントロピー誤差関数とソフトマックス関数，その美しき微分',
    url: 'https://qiita.com/klis/items/4ad3032d02ff815e09e6',
    platform: 'Qiita',
  },
  {
    date: '2017-01',
    title: '再訪scikit-learn',
    url: 'https://qiita.com/klis/items/5061b1717b5205fa43c1',
    platform: 'Qiita',
  },
];

export const experiences: Experience[] = [
  {
    period: '2022 — present',
    role: 'Software Engineer',
    organization: 'Preferred Networks, Inc.',
    summary:
      'Software development for Matlantis, an AI-powered atomistic simulation platform for materials discovery (AI4Science).',
  },
  {
    period: '2019 — 2022',
    role: 'Open-Source Developer (contract)',
    organization: 'Preferred Networks, Inc.',
    summary: 'Open-source development of Chainer and Optuna.',
  },
  {
    period: '2019 — 2022',
    role: 'Software Engineer / Researcher',
    organization: 'Cookpad, Inc.',
    summary:
      'Machine learning and NLP for a large-scale recipe service: named entity recognition, corpus construction, and calorie estimation.',
  },
  {
    period: '2017 — 2019',
    role: 'M.S. in Informatics',
    organization: 'University of Tsukuba',
    summary: 'Specialized in natural language processing.',
  },
];
