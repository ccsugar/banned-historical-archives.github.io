export default {
  entity: {
    id: '45a3e9c0-a313-410a-b227-a7d2a2baab00',
    name: '红旗一九五九年第二十三期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/45a3e9c0-a313-410a-b227-a7d2a2baab00.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '又红又专的问题是世界观的问题',
        authors: ['胡绳'],
        page_start: 3,
        page_end: 8,
        dates: [{ year: 1959, month: 12 }],
      },
      {
        title: '为什么世界观的斗争是当前思想斗争中最突出的问题',
        authors: ['施东向'],
        page_start: 9,
        page_end: 11,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 12 }],
      },
      {
        title: '所谓“自由、平等、博爱”的口号（通信）',
        authors: ['纪耀时'],
        page_start: 11,
        page_end: 13,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 12 }],
      },
      {
        title: '实行煤矿企业生产组织的革命',
        authors: ['张霖之'],
        page_start: 14,
        page_end: 18,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 12 }],
      },
      {
        title: '劳动竞赛是一项创举——鞍钢技术表演竞赛经验介绍',
        authors: ['赵敏'],
        page_start: 19,
        page_end: 25,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 12 }],
      },
      {
        title: '工业支援农业，城市支援农村',
        authors: ['许家屯'],
        page_start: 26,
        page_end: 30,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 12 }],
      },
      {
        title: '“并起来烧就是好”——记严桥人民公社的公共食堂',
        authors: ['乐静', '陈念云', '江曾培'],
        page_start: 31,
        page_end: 36,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 12 }],
      },
      {
        title: '最有效地利用自然资源为社会主义服务',
        authors: ['武衡'],
        page_start: 37,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 12 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/45a3e9c0-a313-410a-b227-a7d2a2baab00.pdf',
};
