export default {
  entity: {
    id: 'a13a4008-5f3a-4f1d-8e0b-940a1c633cd5',
    name: '红旗一九五八年第一期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/a13a4008-5f3a-4f1d-8e0b-940a1c633cd5.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    archive_id: 2,
    articles: [
      {
        title: '红旗杂志发刊词',
        alias: '发刊词',
        authors: [],
        dates: [{ year: 1958 }],
        page_start: 3,
        page_end: 4,
      },
      {
        title: '介绍一个合作社',
        authors: ['毛泽东'],
        dates: [{ year: 1958, month: 4, day: 15 }],
        page_start: 5,
        page_end: 6,
      },
      {
        title: '一个苦战了两年改变了面貌的合作社',
        authors: ['中共封丘县委员会'],
        dates: [{ year: 1958 }],
        page_start: 6,
        page_end: 12,
      },
      {
        title: '南斯拉夫修正主义是帝国主义政策的产物',
        authors: ['陈伯达'],
        dates: [{ year: 1958 }],
        page_start: 13,
        page_end: 20,
      },
      {
        title: '关于美国经济危机',
        authors: ['张闻天'],
        dates: [{ year: 1958 }],
        page_start: 21,
        page_end: 29,
      },
      {
        title: '劳动人民一定要做文化的主人',
        authors: ['柯庆施'],
        dates: [{ year: 1958 }],
        page_start: 30,
        page_end: 34,
      },
      {
        title: '新民歌开拓了诗歌的新道路',
        authors: ['周扬'],
        dates: [{ year: 1958 }],
        page_start: 35,
        page_end: 40,
      },
      {
        title: '依靠群众，势如破竹',
        authors: ['王任重'],
        dates: [{ year: 1958 }],
        page_start: 41,
        page_end: 48,
      },
      {
        title: '农具改良和技术革命',
        authors: ['郑刚'],
        dates: [{ year: 1958 }],
        page_start: 48,
        page_end: 51,
      },
    ],
    ocr: {
      auto_vsplit: false,
      vsplit: 0,
      content_thresholds: [0, 0.1, 0, 0.1],
    },
    ocr_exceptions: {
      '6': { vsplit: 0.35 },
      '7': { vsplit: 0.35 },
      '8': { vsplit: 0.35 },
      '9': { vsplit: 0.35 },
      '10': { vsplit: 0.35 },
      '11': { vsplit: 0.35 },
      '12': { vsplit: 0.35 },
      '35': { vsplit: 0.35 },
      '36': { vsplit: 0.35 },
      '37': { vsplit: 0.35 },
      '38': { vsplit: 0.35 },
      '39': { vsplit: 0.35 },
      '40': { vsplit: 0.35 },
      '48': { vsplit: 0.35 },
      '49': { vsplit: 0.35 },
      '50': { vsplit: 0.35 },
      '51': { vsplit: 0.35 },
    },
  },
  parser_id: 'automation',
  path: '/archives2/a13a4008-5f3a-4f1d-8e0b-940a1c633cd5.pdf',
};
