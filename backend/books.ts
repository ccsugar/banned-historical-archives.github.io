import { join } from 'node:path/posix';
import { existsSync } from 'node:fs';
import { Book, ParserOption } from '../types';
import * as jinghuo_parser from './parser/jinghuo_parser';
import * as wansui_parser from './parser/wansui_parser';
import * as wenji_parser from './parser/wenji_parser';
import * as jqjianghua_parser from './parser/jqjianghua_parser';
import * as xuanji_parser from './parser/xuanji';
import * as jimi from './parser/jimi';
import * as wenku_parser from './parser/wenku';
import * as maoquanji from './parser/maoquanji';
import * as maoyuanxin1 from './parser/maoyuanxin1';
import * as maoyuanxin2 from './parser/maoyuanxin2';
import * as maoyuanxin3 from './parser/maoyuanxin3';
import * as maoyuanxin4 from './parser/maoyuanxin4';
import * as wanghongwen from './parser/wanghongwen';
import * as wanghongwen1 from './parser/wanghongwen1';
import * as wanghongwen2 from './parser/wanghongwen2';
import * as wanghongwen3 from './parser/wanghongwen3';
import * as wanghongwen4 from './parser/wanghongwen4';
import * as wanghongwen5 from './parser/wanghongwen5';
import * as wanghongwen6 from './parser/wanghongwen6';
import * as wanghongwen7 from './parser/wanghongwen7';
import * as wanghongwen8 from './parser/wanghongwen8';
import * as wanghongwen9 from './parser/wanghongwen9';
import * as wanghongwen10 from './parser/wanghongwen10';
import * as wanghongwen11 from './parser/wanghongwen11';
import * as yaowenyuan from './parser/yaowenyuan';
import * as yaowenyuan1 from './parser/yaowenyuan1';
import * as yaowenyuan2 from './parser/yaowenyuan2';
import * as yaowenyuan3 from './parser/yaowenyuan3';
import * as zhangchunqiao from './parser/zhangchunqiao';
import * as zhangchunqiao1 from './parser/zhangchunqiao1';
import * as zhangchunqiao2 from './parser/zhangchunqiao2';
import * as zhangchunqiao3 from './parser/zhangchunqiao3';
import * as zhangchunqiao4 from './parser/zhangchunqiao4';
import * as zhangchunqiao5 from './parser/zhangchunqiao5';
import * as zhangchunqiao6 from './parser/zhangchunqiao6';
import * as zhangchunqiao7 from './parser/zhangchunqiao7';
import * as zhangchunqiao8 from './parser/zhangchunqiao8';
import * as zhangchunqiao9 from './parser/zhangchunqiao9';
import * as zhangchunqiao10 from './parser/zhangchunqiao10';
import * as zhangchunqiao11 from './parser/zhangchunqiao11';
import * as zhangchunqiao12 from './parser/zhangchunqiao12';
import * as zhangchunqiao13 from './parser/zhangchunqiao13';
import * as zhangchunqiao14 from './parser/zhangchunqiao14';
import * as zhangchunqiao15 from './parser/zhangchunqiao15';
import * as piliu1 from './parser/piliu1';
import * as zzj1 from './parser/zzj1';
import * as duoren1 from './parser/duoren1';
import * as duoren2 from './parser/duoren2';
import * as duoren3 from './parser/duoren3';
import * as duoren4 from './parser/duoren4';
import * as duoren5 from './parser/duoren5';
import * as duoren6 from './parser/duoren6';
import * as duoren7 from './parser/duoren7';
import * as duoren8 from './parser/duoren8';
import * as duoren9 from './parser/duoren9';
import * as duoren10 from './parser/duoren10';
import * as automation from './parser/automation';
import { apply_patch, apply_patch_v2, get_article_id } from '../utils';
import { traditionalChineseToSimpleChinese } from '../utils/i18n';
import { exclude, normalize } from './utils';

const patch_dir = join(normalize(__dirname), '../patch/articles');
const books: Book[] = [
  {
    entity: {
      id: '7c69c3ac-22a8-483f-b7ba-33fb0081f388',
      name: '毛远新在省工农兵干部学习班的几次讲话（摘编）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(12)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/7c69c3ac-22a8-483f-b7ba-33fb0081f388/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新在省工农兵干部学习班向省委常委汇报学习心得会上的讲话（节录）","authors":["毛远新"],"page_start":2,"page_end":3,"dates":[{"year":1974,"month":2,"day":15},{"year":1974,"month":2,"day":16}]},{"title":"毛远新在省第二期工农兵干部学习班开学典礼上的讲话（节录）","authors":["毛远新"],"page_start":3,"page_end":5,"dates":[{"year":1974,"month":3,"day":28}]},{"title":"毛远新在省工农兵干部学习班的讲话（节录）","authors":["毛远新"],"page_start":5,"page_end":6,"dates":[{"year":1974,"month":4}]},{"title":"毛远新在省工农兵干部学习班组长座谈会上的讲话（节录）","authors":["毛远新"],"page_start":6,"page_end":8,"dates":[{"year":1974,"month":4,"day":3}]},{"title":"毛远新在省第一期工农兵干部学习班部分学员座谈会上的讲话（节录）","authors":["毛远新"],"page_start":8,"page_end":11,"dates":[{"year":1974,"month":5,"day":7}]},{"title":"毛远新在辽宁省工人干部学校第一期开学典礼上的讲话（节录）","authors":["毛远新"],"page_start":11,"page_end":12,"dates":[{"year":1974,"month":6,"day":20}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/7c69c3ac-22a8-483f-b7ba-33fb0081f388'),
  },
  {
    entity: {
      id: '1889b60c-cfab-44db-b430-0af194080c11',
      name: '毛远新同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(1)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/1889b60c-cfab-44db-b430-0af194080c11/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新同志在辽宁省革委会落实政策加强团结抚顺现场经验交流会上的讲话","authors":["毛远新"],"page_start":1,"page_end":1,"dates":[{"year":1969,"month":8,"day":14}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/1889b60c-cfab-44db-b430-0af194080c11'),
  },
  {
    entity: {
      id: '24ce30a0-4265-4ad5-8743-fc952385a77b',
      name: '陈锡联同志在沈阳三派革命群众组织代表座谈会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(1)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/24ce30a0-4265-4ad5-8743-fc952385a77b/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"陈锡联在沈阳三派革命群众组织代表座谈会上的讲话","authors":["陈锡联"],"page_start":1,"page_end":1,"dates":[{"year":1968,"month":4,"day":7}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/24ce30a0-4265-4ad5-8743-fc952385a77b'),
  },
  {
    entity: {
      id: 'b1848c1e-baa9-49fd-abc4-a8b263e4bcf6',
      name: '毛远新同志在沈阳三派革命群众组织代表座谈会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b1848c1e-baa9-49fd-abc4-a8b263e4bcf6/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新同志在沈阳三派革命群众组织代表座谈会上的讲话","authors":["毛远新"],"page_start":1,"page_end":3,"dates":[{"year":1968,"month":4,"day":7}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/b1848c1e-baa9-49fd-abc4-a8b263e4bcf6'),
  },
  {
    entity: {
      id: '52d8fbe4-965f-4cfc-872b-e6029e3f734d',
      name: '在北京接见辽革站赴京代表团时毛远新同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/52d8fbe4-965f-4cfc-872b-e6029e3f734d/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新同志在北京会见辽革站赴京代表团时的讲话","authors":["毛远新"],"page_start":1,"page_end":2,"dates":[{"year":1968,"month":3,"day":4}]}],
      ocr: {"auto_vsplit":true,"vsplit":0.5},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/52d8fbe4-965f-4cfc-872b-e6029e3f734d'),
  },
  {
    entity: {
      id: 'fb71dfe8-41f8-40fc-be7e-de81d9bcab90',
      name: '红旗一九六六年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/fb71dfe8-41f8-40fc-be7e-de81d9bcab90.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"苏共新领导奉行苏美合作路线的供状","authors":["红旗杂志评论员"],"page_start":3,"page_end":11,"dates":[{"year":1966}]},{"title":"苏共新领导鼓吹苏美合作的两本书","authors":[],"page_start":12,"page_end":17,"dates":[{"year":1966}]},{"title":"工农兵群众掌握理论的时代开始了","authors":["红旗杂志评论员"],"page_start":18,"page_end":21,"dates":[{"year":1966}]},{"title":"运用《实践论》总结民间测天经验","authors":["段春作"],"page_start":22,"page_end":29,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"《矛盾论》的思想进了水泥窖","authors":["刘培顺"],"page_start":30,"page_end":34,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"一万公里和一公里","authors":["赵维会"],"page_start":35,"page_end":36,"ocr":{"vsplit":0.35},"dates":[{"year":1965,"month":7,"day":22}]},{"title":"老规矩是怎样一破再破的——解放军某炊事班磨豆腐的故事","authors":["魏勤生"],"page_start":36,"page_end":37,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"为人民站柜台，从实践中学本领","authors":["杨瑾瑜"],"page_start":38,"page_end":43,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"评吴晗同志的资产阶级历史观","authors":["马岩"],"page_start":44,"page_end":53,"dates":[{"year":1966}]},{"title":"一家贫农——访问越南通讯：《人民战争花最红》之二","authors":["魏巍"],"page_start":54,"page_end":59,"dates":[{"year":1966}]}],
      ocr: {"auto_vsplit":false,"vsplit":0,"content_thresholds":[0,0.1,0,0.1]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives2/fb71dfe8-41f8-40fc-be7e-de81d9bcab90.pdf'),
  },
  {
    entity: {
      id: '7c5acd07-d5d3-4bee-b72f-af92099f6097',
      name: '红旗一九六六年第三期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/7c5acd07-d5d3-4bee-b72f-af92099f6097.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"必须把史学革命进行到底","authors":["尹达"],"page_start":3,"page_end":12,"dates":[{"year":1966}]},{"title":"不爱红装爱武装","authors":["杨作红"],"page_start":13,"page_end":17,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"思想不断革命 技术不断革命","authors":["邹瑞禄"],"page_start":17,"page_end":22,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"从不愿意当干部到决心干一辈子革命","authors":["宋文美"],"page_start":22,"page_end":27,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"毛泽东文艺思想的胜利——评《收租院》泥塑群象","authors":["蔡若红"],"page_start":28,"page_end":35,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]}],
      ocr: {"auto_vsplit":false,"vsplit":0,"content_thresholds":[0,0.1,0,0.1]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives2/7c5acd07-d5d3-4bee-b72f-af92099f6097.pdf'),
  },
  {
    entity: {
      id: '7e25f78e-34c8-4f74-bb66-f25361b2a16a',
      name: '红旗一九六六年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/7e25f78e-34c8-4f74-bb66-f25361b2a16a.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"政治是统帅，是灵魂","alias":"一九六六年元旦社论","authors":[],"page_start":3,"page_end":5,"dates":[{"year":1966,"month":1,"day":1}]},{"title":"苏共领导是宣言和声明的背叛者","authors":["人民日报编辑部"],"page_start":6,"page_end":9,"dates":[{"year":1965,"month":12,"day":30}]},{"title":"高举毛泽东思想红旗做又会劳动又会创作的文艺战士","alias":"一九六五年十一月二十九日在全国青年业余文学创作积极分子大会上的讲话","authors":["周扬"],"page_start":10,"page_end":28,"dates":[{"year":1965,"month":11,"day":29}]},{"title":"高标准的质量来自高标准的思想","authors":["苏星"],"page_start":29,"page_end":31,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"社会主义事业的发展不能坐着等","authors":["王永幸"],"page_start":32,"page_end":38,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"一个长期扎根农村的电影放映队","authors":["吉映"],"page_start":39,"page_end":42,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"把书送到农民手里","authors":["崔月仙"],"page_start":43,"page_end":46,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]},{"title":"人类认识化学元素的过程","authors":["刘际启"],"page_start":47,"page_end":55,"ocr":{"vsplit":0.35},"dates":[{"year":1966}]}],
      ocr: {"auto_vsplit":false,"vsplit":0,"content_thresholds":[0,0.1,0,0.1]},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives2/7e25f78e-34c8-4f74-bb66-f25361b2a16a.pdf'),
  },
  {
    entity: {
      id: 'eaefb094-86e6-4c5f-a190-46818d16ffa2',
      name: '毛远新同志、陈锡联司令员、李伯秋主任在接见辽宁三大派赴京代表团会议上讲话纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/eaefb094-86e6-4c5f-a190-46818d16ffa2/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新同志、陈锡联司令员、李伯秋主任在接见辽宁三大派赴京代表团会议上讲话纪要","authors":["毛远新","陈锡联"],"page_start":1,"page_end":1,"dates":[{"year":1968,"month":4,"day":7}]},{"title":"陈锡联同志的讲话","authors":["陈锡联"],"page_start":2,"page_end":2,"dates":[{"year":1968,"month":4,"day":7}]},{"title":"坚决打倒宋任穷的口号","authors":[],"page_start":2,"page_end":2,"dates":[]}],
      ocr: {"auto_vsplit":true,"vsplit":0.5},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/eaefb094-86e6-4c5f-a190-46818d16ffa2'),
  },
  {
    entity: {
      id: '3bced832-3272-4fe6-b454-b0ef7886081d',
      name: '毛远新同志讲话（五月四日）八三一总司全委扩大会议简报',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/3bced832-3272-4fe6-b454-b0ef7886081d/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新同志在八三一总司揭发批判张群久、于跃、雷云江、付长恩大会上的讲话","authors":["毛远新"],"page_start":1,"page_end":2,"dates":[{"year":1968,"month":5,"day":4}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/3bced832-3272-4fe6-b454-b0ef7886081d'),
  },
  {
    entity: {
      id: 'ca52d8a2-4eb3-4da5-b1db-ceebcbf032d2',
      name: '毛远新的两次谈话记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/ca52d8a2-4eb3-4da5-b1db-ceebcbf032d2/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新的两次谈话记录","authors":["毛远新"],"page_start":1,"page_end":9,"dates":[{"year":1976,"month":6,"day":2},{"year":1976,"month":6,"day":5}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/ca52d8a2-4eb3-4da5-b1db-ceebcbf032d2'),
  },
  {
    entity: {
      id: 'c4f4035b-486a-459b-9cb7-4deb00350052',
      name: '毛远新在学习辽宁朝阳农学院教育革命经验现场会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(21)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c4f4035b-486a-459b-9cb7-4deb00350052/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新在学习辽宁朝阳农学院教育革命经验现场会上的讲话","authors":["毛远新"],"page_start":1,"page_end":21,"dates":[{"year":1974,"month":12,"day":23}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/c4f4035b-486a-459b-9cb7-4deb00350052'),
  },
  {
    entity: {
      id: '787c5af3-10c9-40fd-bd3e-6e0a13e7e67c',
      name: '毛远新吹捧宋江、美化自己的一段谈话（节录）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/787c5af3-10c9-40fd-bd3e-6e0a13e7e67c/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新在鞍山市党员干部会议上的讲话（摘录）","authors":["毛远新"],"page_start":2,"page_end":3,"dates":[{"year":1975,"month":7,"day":7}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/787c5af3-10c9-40fd-bd3e-6e0a13e7e67c'),
  },
  {
    entity: {
      id: '6959f089-922d-4677-b3cb-eba8636787d0',
      name: '毛远新的谈话记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(10)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6959f089-922d-4677-b3cb-eba8636787d0/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新的谈话记录","authors":["毛远新"],"page_start":2,"page_end":10,"dates":[{"year":1976,"month":2,"day":8}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/6959f089-922d-4677-b3cb-eba8636787d0'),
  },
  {
    entity: {
      id: 'febb7416-870c-4ca2-85c1-00de96d8a9d0',
      name: '毛远新谈话记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/febb7416-870c-4ca2-85c1-00de96d8a9d0/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新谈话记录","authors":["毛远新"],"page_start":2,"page_end":4,"dates":[{"year":1976,"month":4,"day":22}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/febb7416-870c-4ca2-85c1-00de96d8a9d0'),
  },
  {
    entity: {
      id: 'b8079465-9bf6-46cd-9c6c-95208979eed0',
      name: '工人阶级必须领导一切',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/b8079465-9bf6-46cd-9c6c-95208979eed0.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"工人阶级必须领导一切","authors":["姚文元"],"page_start":3,"page_end":10,"dates":[{"year":1968,"month":8,"day":25}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives3/b8079465-9bf6-46cd-9c6c-95208979eed0.pdf'),
  },
  {
    entity: {
      id: 'dcd0d64f-fa58-4455-a6ce-8c78a1f187d0',
      name: '毛远新对当前工作的意见',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/dcd0d64f-fa58-4455-a6ce-8c78a1f187d0/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新对当前工作的意见","authors":["毛远新"],"page_start":1,"page_end":2,"dates":[{"year":1976,"month":4,"day":19}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/dcd0d64f-fa58-4455-a6ce-8c78a1f187d0'),
  },
  {
    entity: {
      id: 'f692a8bf-a640-4079-89e3-c41186cb50ff',
      name: '毛远新的谈话记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/f692a8bf-a640-4079-89e3-c41186cb50ff/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新的谈话记录","authors":["毛远新"],"page_start":2,"page_end":8,"dates":[{"year":1976,"month":1,"day":1}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/f692a8bf-a640-4079-89e3-c41186cb50ff'),
  },
  {
    entity: {
      id: '5c2a93f5-a845-42ca-aeb7-69a6f92fc954',
      name: '毛远新在市地委书记会议召集人会上的讲话记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(7)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/5c2a93f5-a845-42ca-aeb7-69a6f92fc954/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新在市地委书记会议召集人会上的讲话记录","authors":["毛远新"],"page_start":2,"page_end":7,"dates":[{"year":1975,"month":12,"day":2}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/5c2a93f5-a845-42ca-aeb7-69a6f92fc954'),
  },
  {
    entity: {
      id: '78256f65-d15b-4800-976e-d4a9e6e7a160',
      name: '红旗一九五八年第二期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/78256f65-d15b-4800-976e-d4a9e6e7a160.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [
        {"title":"破除迷信","authors":["范文澜"],"page_start":3,"page_end":6,"dates":[{"year":1958}]},
        {"title":"治水问题的两条路线","authors":["曾希圣"],"page_start":7,"page_end":10,"dates":[{"year":1958}]},
        {"title":"开渠歌","authors":[],"page_start":10,"page_end":10,"dates":[{"year":1958}]},
        {"title":"高山顶上人造江","authors":[],"page_start":10,"page_end":10,"dates":[{"year":1958}]},
        {"title":"车干长江与黄河","authors":[],"page_start":10,"page_end":10,"dates":[{"year":1958}]},
        {"title":"驳斥现代修正主义反动的国家论","authors":["王稼祥"],"page_start":11,"page_end":18,"dates":[{"year":1958}]},
        {"title":"美帝国主义在南斯拉夫的赌注","authors":["陈伯达"],"page_start":19,"page_end":21,"dates":[{"year":1958}], ocr:{ vsplit: 0.35}},
        {"title":"病树前头万木春——从泰晤士报的一篇评论谈起","authors":["胡乔木"],"page_start":22,"page_end":24,"dates":[{"year":1958}]},
        {"title":"水力和电力结合，乡社工业遍地开花","authors":["张桂如"],"page_start":25,"page_end":28,"dates":[{"year":1958}]},
        {"title":"颂抗旱","authors":["陈忠生"],"page_start":28,"page_end":28,"dates":[{"year":1958}]},
        {"title":"每人七分地也能成为余粮社、富裕社","authors":["田荣申"],"page_start":29,"page_end":31,"dates":[{"year":1958}]},
        {"title":"农具大革新，生产大跃进","authors":["师道铎"],"page_start":32,"page_end":35,"dates":[{"year":1958}], ocr:{ vsplit: 0.35}},
        {"title":"一个青年农民把柴油机改装成了拖拉机","authors":["仝云"],"page_start":35,"page_end":35,"dates":[{"year":1958}], ocr:{ vsplit: 0.35}},
        {"title":"找资源，挖潜力，做好农村的采购工作","authors":["杨一辰"],"page_start":36,"page_end":39,"dates":[{"year":1958}]},
        {"title":"为啥云上红旗飘","authors":[],"page_start":39,"page_end":39,"dates":[{"year":1958}]},
        {"title":"五台山变成聚宝山","authors":["王铭三"],"page_start":40,"page_end":43,"dates":[{"year":1958}], ocr:{ vsplit: 0.35}}
      ],
      ocr: {"auto_vsplit":false,"vsplit":0,"content_thresholds":[0,0.1,0,0.1], differential_paragraph_merge_strategy_threshold: 20},
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives2/78256f65-d15b-4800-976e-d4a9e6e7a160.pdf'),
  },
  {
    entity: {
      id: '57df1a72-767a-4bb8-8cbe-f09d976eec5a',
      name: '论林彪反党集团的社会基础',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/57df1a72-767a-4bb8-8cbe-f09d976eec5a.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      articles: [{"title":"论林彪反党集团的社会基础","authors":["姚文元"],"page_start":1,"page_end":6,"dates":[{"year":1975,"month":3,"day":1}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives3/57df1a72-767a-4bb8-8cbe-f09d976eec5a.pdf'),
  },
  {
    entity: {
      id: '2cec027f-70be-4525-8a87-8da2e7cfa6fc',
      name: '毛远新在省委常委会议上的发言（摘录）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/2cec027f-70be-4525-8a87-8da2e7cfa6fc/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"毛远新在省委常委会议上的发言","authors":["毛远新"],"page_start":2,"page_end":4,"archive_id":1,"dates":[{"year":1974,"month":2,"day":9}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/2cec027f-70be-4525-8a87-8da2e7cfa6fc'),
  },
  {
    entity: {
      id: '31b69dc5-0197-45f9-b432-e090f4f60114',
      name: '中央首长在北京市革命委员会常委扩大会议上的重要讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/31b69dc5-0197-45f9-b432-e090f4f60114/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"中央首长在北京市革命委员会常委扩大会议上的重要讲话","authors":["江青","张春桥","陈伯达","康生","周恩来","谢富治"],"dates":[{"year":1967,"month":9,"day":1}],"page_start":1,"page_end":9}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/31b69dc5-0197-45f9-b432-e090f4f60114'),
  },
  {
    entity: {
      id: 'a13a4008-5f3a-4f1d-8e0b-940a1c633cd5',
      name: '红旗一九五八年第一期',
      internal: true,
      official: true,
      type: 'pdf',
      author: '',
      files: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/a13a4008-5f3a-4f1d-8e0b-940a1c633cd5.pdf',
    },
    parser_option: {
      page_limits: [],
      ext: 'pdf',
      archive_id: 2,
      articles: [{"title":"红旗杂志发刊词","alias":"发刊词","authors":[],"dates":[{"year":1958}],"page_start":3,"page_end":4},{"title":"介绍一个合作社","authors":["毛泽东"],"dates":[{"year":1958,"month":4,"day":15}],"page_start":5,"page_end":6},{"title":"一个苦战了两年改变了面貌的合作社","authors":["中共封丘县委员会"],"dates":[{"year":1958}],"page_start":6,"page_end":12},{"title":"南斯拉夫修正主义是帝国主义政策的产物","authors":["陈伯达"],"dates":[{"year":1958}],"page_start":13,"page_end":20},{"title":"关于美国经济危机","authors":["张闻天"],"dates":[{"year":1958}],"page_start":21,"page_end":29},{"title":"劳动人民一定要做文化的主人","authors":["柯庆施"],"dates":[{"year":1958}],"page_start":30,"page_end":34},{"title":"新民歌开拓了诗歌的新道路","authors":["周扬"],"dates":[{"year":1958}],"page_start":35,"page_end":40},{"title":"依靠群众，势如破竹","authors":["王任重"],"dates":[{"year":1958}],"page_start":41,"page_end":48},{"title":"农具改良和技术革命","authors":["郑刚"],"dates":[{"year":1958}],"page_start":48,"page_end":51}],
      ocr: {"auto_vsplit":false,"vsplit":0,"content_thresholds":[0,0.1,0,0.1]},
      ocr_exceptions: {"6":{"vsplit":0.35},"7":{"vsplit":0.35},"8":{"vsplit":0.35},"9":{"vsplit":0.35},"10":{"vsplit":0.35},"11":{"vsplit":0.35},"12":{"vsplit":0.35},"35":{"vsplit":0.35},"36":{"vsplit":0.35},"37":{"vsplit":0.35},"38":{"vsplit":0.35},"39":{"vsplit":0.35},"40":{"vsplit":0.35},"48":{"vsplit":0.35},"49":{"vsplit":0.35},"50":{"vsplit":0.35},"51":{"vsplit":0.35}},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives2/a13a4008-5f3a-4f1d-8e0b-940a1c633cd5.pdf'),
  },
  {
    entity: {
      id: '259053b8-c23b-40e9-95d0-63476a3bc6c8',
      name: '江青陈伯达在北京大学的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/259053b8-c23b-40e9-95d0-63476a3bc6c8/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"江青陈伯达在北京大学的讲话","authors":["江青","陈伯达"],"dates":[{"year":1966,"month":7,"day":23}],"page_start":1,"page_end":2}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/259053b8-c23b-40e9-95d0-63476a3bc6c8'),
  },
  {
    entity: {
      id: 'f4596d80-d0b2-4349-91d5-aadaae94aa11',
      name: '洪文、春桥同志批示',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(15)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/f4596d80-d0b2-4349-91d5-aadaae94aa11/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"王洪文、张春桥同志批示","authors":["王洪文","张春桥"],"dates":[{"year":1974,"month":4,"day":7}],"page_start":1,"page_end":1},{"title":"上海市委领导同志在警备区看大字报时讲话","authors":[],"dates":[{"year":1974,"month":6,"day":28}],"page_start":1,"page_end":2},{"title":"关于许世友的大字报","authors":["曲增言"],"dates":[{"year":1974,"month":6,"day":27}],"page_start":3,"page_end":15}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/f4596d80-d0b2-4349-91d5-aadaae94aa11'),
  },
  {
    entity: {
      id: 'ea12100d-1d0d-43a9-a4bc-355af558ae65',
      name: '张春桥同志接见工总司常委时的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/ea12100d-1d0d-43a9-a4bc-355af558ae65/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志接见工总司常委时的讲话","authors":["张春桥"],"dates":[{"year":1967,"month":9,"day":8}],"page_start":1,"page_end":3}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/ea12100d-1d0d-43a9-a4bc-355af558ae65'),
  },
  {
    entity: {
      id: '262825ac-988f-4c65-abb7-03ca63794c98',
      name: '周恩来、陈伯达、康生、江青、杨成武、张春桥同志和中央文革小组在接见河南湖北来京参加学习班的军队干部地方干部和红卫兵会议上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(7)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/262825ac-988f-4c65-abb7-03ca63794c98/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"周恩来、陈伯达、康生、江青、杨成武、张春桥同志和中央文革小组在接见河南湖北来京参加学习班的军队干部地方干部和红卫兵会议上的讲话","authors":["周恩来","陈伯达","康生","江青","杨成武","张春桥"],"dates":[{"year":1967,"month":9,"day":26}],"page_start":1,"page_end":7}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/262825ac-988f-4c65-abb7-03ca63794c98'),
  },
  {
    entity: {
      id: '38d166b6-f2ce-4f65-93a7-3b9bb5794592',
      name: '张春桥同志在上海市革命委员会扩大会议上的重要指示',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(5)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/38d166b6-f2ce-4f65-93a7-3b9bb5794592/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥在上海革委会扩大会议上的讲话","authors":["张春桥"],"dates":[{"year":1967,"month":11,"day":19}],"page_start":1,"page_end":5}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/38d166b6-f2ce-4f65-93a7-3b9bb5794592'),
  },
  {
    entity: {
      id: '57d74152-648c-41b9-8746-2b76ca7f572f',
      name: '张春桥同志1967年12月10日下午接见文艺界代表讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(6)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/57d74152-648c-41b9-8746-2b76ca7f572f/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥接见文艺出版界代表的讲话","alias":"张春桥同志1967年12月10日下午接见文艺界代表讲话","authors":["张春桥"],"dates":[{"year":1967,"month":12,"day":10}],"page_start":1,"page_end":6}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/57d74152-648c-41b9-8746-2b76ca7f572f'),
  },
  {
    entity: {
      id: 'b3ca39f5-3154-4c20-8f01-d8ed821d5ea5',
      name: '总理、陈伯达、康生、江青、姚文元等同志在接见全国铁路、交通会议全体代表时的重要讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(7)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b3ca39f5-3154-4c20-8f01-d8ed821d5ea5/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"周总理陈伯达康生江青姚文元等同志在接见全国铁路、交通会议全体代表时的讲话","authors":["周恩来","江青","陈伯达","康生","姚文元"],"dates":[{"year":1968,"month":5,"day":12}],"page_start":1,"page_end":7}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/b3ca39f5-3154-4c20-8f01-d8ed821d5ea5'),
  },
  {
    entity: {
      id: 'maoyuanxin6',
      name: '冯金传达毛远新同志在省工农兵干部学习班上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(5)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/maoyuanxin6/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"毛远新同志在省工农兵干部学习班上的讲话","authors":["毛远新"],"dates":[{"year":1974,"month":2,"day":16}],"page_start":1,"page_end":5}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/maoyuanxin6'),
  },
  {
    entity: {
      id: 'duoren11',
      name: '张春桥王洪文同志在上海市革命委员会研究工代会上讲话的会议记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(11)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/duoren11/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥王洪文同志在上海市革命委员会研究工代会上讲话的会议记录","authors":["张春桥","王洪文"],"dates":[{"year":1967,"month":11,"day":22}],"page_start":1,"page_end":11}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/duoren11'),
  },
  {
    entity: {
      id: 'duoren13',
      name: '张春桥王效禹在济南军区的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/duoren13/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"张春桥同志在济南军区的讲话","page_start":1,"page_end":2,"authors":["张春桥"],"dates":[{"year":1967,"month":5}]},{"title":"王效禹同志在济南军区的讲话","page_start":2,"page_end":4,"authors":["王效禹"],"dates":[{"year":1967,"month":5,"day":29}]},{"title":"王效禹同志在济南军区的讲话","page_start":4,"page_end":9,"authors":["王效禹"],"dates":[{"year":1967,"month":5,"day":28}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/duoren13'),
  },
  {
    entity: {
      id: 'zhangchunqiao16',
      name: '张春桥同志最新讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao16/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"张春桥同志与华东局革命造反派座谈纪要","authors":["张春桥"],"dates":[{"year":1967,"month":2,"day":25}],"page_start":1,"page_end":4}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/zhangchunqiao16'),
  },
  {
    entity: {
      id: 'duoren12',
      name: '“四人帮”罪行材料（一）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(16)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/duoren12/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"江青给中央军委的信","authors":["江青"],"dates":[{"year":1974,"month":1,"day":24}],"is_range_date":false,"alias":"","page_start":2,"page_end":3},{"title":"迟群、谢静宜在军委直属单位批林批孔报告会上的讲话","authors":["迟群","谢静宜"],"dates":[{"year":1974,"month":1,"day":24}],"is_range_date":false,"alias":"","page_start":3,"page_end":16}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/duoren12'),
  },
  {
    entity: {
      id: 'wanghongwen12',
      name: '揭发“四人帮”王洪文插手控制上影阴谋篡党夺权的罪行',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/wanghongwen12/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"王洪文审查《春苗》、《战船台》与在电影工业会议上的讲话","authors":["王洪文"],"dates":[{"year":1975,"month":8,"day":31},{"year":1975,"month":9,"day":3},{"year":1975,"month":9,"day":4}],"page_start":2,"page_end":6},{"title":"王洪文在上海文艺座谈会上的讲话","authors":["王洪文"],"dates":[{"year":1975,"month":10,"day":14}],"page_start":6,"page_end":7},{"title":"王洪文在钓鱼台与张家龙等的讲话","authors":["王洪文"],"dates":[{"year":1975,"month":5,"day":8}],"page_start":8,"page_end":9}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/wanghongwen12'),
  },
  {
    entity: {
      id: 'maoyuanxin5',
      name: '未知出处文稿',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/maoyuanxin5/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'jpg',
      articles: [{"title":"我为什么参加红色造反团","authors":["毛远新"],"dates":[{"year":1966,"month":12,"day":11}],"page_start":1,"page_end":2}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/maoyuanxin5'),
  },
  {
    entity: {
      id: 'jiangqing1',
      name: '四人帮反党罪行材料选编（一）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(23)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/jiangqing1/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"江青同志在新华印刷厂工人座谈会上的讲话","authors":["江青"],"dates":[{"year":1975,"month":4,"day":3}],"page_start":4,"page_end":14},{"title":"江青同志在清华大学大兴农村分校的讲话","authors":["江青"],"dates":[{"year":1976,"month":9}],"page_start":15,"page_end":23}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/jiangqing1'),
  },
  {
    entity: {
      id: 'jiangqing2',
      name: '四人帮反党罪行材料选编（二）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(18)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/jiangqing2/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: 'png',
      articles: [{"title":"江青同志在清华农村分校的讲话","page_start":4,"page_end":6,"authors":["江青"],"dates":[{"year":1976,"month":9,"day":27}]},{"title":"江青同志在清华农村分校花生地的讲话","page_start":7,"page_end":11,"authors":["江青"],"dates":[{"year":1976,"month":9,"day":28}]},{"title":"江青同志在清华工程物理系的讲话","page_start":12,"page_end":18,"authors":["江青"],"dates":[{"year":1976,"month":9,"day":29}]}],
      ocr: undefined,
      ocr_exceptions: {},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives1/jiangqing2'),
  },
  {
    entity: {
      id: 'duoren1',
      name: '“四人帮”罪行材料（三）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/duoren1/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 9]],
    },
    parser: duoren1.parse,
    path: join(normalize(__dirname), '../public/books/archives1/duoren1'),
  },
  {
    entity: {
      id: 'duoren2',
      name: '中央首长第三次接见安徽代表',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/duoren2/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 8]],
    },
    parser: duoren2.parse,
    path: join(normalize(__dirname), '../public/books/archives1/duoren2'),
  },
  {
    entity: {
      id: 'duoren3',
      name: '张春桥同志接见部分赴京革命同学的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/duoren3/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 8]],
    },
    parser: duoren3.parse,
    path: join(normalize(__dirname), '../public/books/archives1/duoren3'),
  },
  {
    entity: {
      id: 'duoren4',
      name: '“四人帮”罪行材料（九）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/duoren4/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 3]],
    },
    parser: duoren4.parse,
    path: join(normalize(__dirname), '../public/books/archives1/duoren4'),
  },
  {
    entity: {
      id: 'duoren5',
      name: '“四人帮”罪行材料（四）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(5)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/duoren5/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 5]],
    },
    parser: duoren5.parse,
    path: join(normalize(__dirname), '../public/books/archives1/duoren5'),
  },
  {
    entity: {
      id: 'duoren6',
      name: '“四人帮”罪行材料（一〇）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/duoren6/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 8]],
    },
    parser: duoren6.parse,
    path: join(normalize(__dirname), '../public/books/archives1/duoren6'),
  },
  {
    entity: {
      id: 'duoren7',
      name: '“四人帮”罪行材料（五）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/duoren7/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 4]],
    },
    parser: duoren7.parse,
    path: join(normalize(__dirname), '../public/books/archives1/duoren7'),
  },
  {
    entity: {
      id: 'duoren8',
      name: '王洪文、纪登奎同志在省委工作会议召集人和县委书记会议上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(7)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/duoren8/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 7]],
    },
    parser: duoren8.parse,
    path: join(normalize(__dirname), '../public/books/archives1/duoren8'),
  },
  {
    entity: {
      id: 'duoren9',
      name: '王洪文、叶剑英在接见总参民兵组训工作座谈会议全体同志时的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(7)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/duoren9/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 7]],
    },
    parser: duoren9.parse,
    path: join(normalize(__dirname), '../public/books/archives1/duoren9'),
  },
  {
    entity: {
      id: 'duoren10',
      name: '毛远新同志在辽联赴京代表团座谈会上的讲话纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/duoren10/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 2]],
    },
    parser: duoren10.parse,
    path: join(normalize(__dirname), '../public/books/archives1/duoren10'),
  },
  {
    entity: {
      id: 'piliu1',
      name: '坚决批倒批臭刘少奇反革命修正主义路线',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(13)
        .fill(0)
        .map((i, idx) => `/books/piliu1/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[2, 13]],
    },
    parser: piliu1.parse,
    path: join(normalize(__dirname), '../public/books/piliu1'),
  },
  {
    entity: {
      id: 'maoxuan-jinghuo',
      name: '毛泽东选集1-7(静火版)',
      internal: false,
      official: false,
      author: '静火',
      type: 'pdf',
      files: '/books/maoxuan-jinghuo.pdf',
    },
    parser_option: {
      page_limits: [
        [20, 1183],
        [1192, 1489],
        [1504, 1791],
      ],
    },
    parser: jinghuo_parser.parse,
    path: join(normalize(__dirname), '../public/books/maoxuan-jinghuo.pdf'),
  },
  {
    entity: {
      id: 'wansui1',
      name: '毛泽东思想万岁(1913-1943卷)',
      internal: false,
      official: false,
      author: '未知',
      type: 'pdf',
      files: '/books/wansui1a.pdf',
    },
    parser_option: {
      page_limits: [[9, 569]],
    },
    parser: wansui_parser.parse,
    path: join(normalize(__dirname), '../public/books/wansui1a.pdf'),
  },
  {
    entity: {
      id: 'wansui2',
      name: '毛泽东思想万岁(1943-1949卷)',
      internal: false,
      official: false,
      author: '未知',
      type: 'pdf',
      files: '/books/wansui2a.pdf',
    },
    parser_option: {
      page_limits: [[9, 542]],
    },
    parser: wansui_parser.parse,
    path: join(normalize(__dirname), '../public/books/wansui2a.pdf'),
  },
  {
    entity: {
      id: 'wansui3',
      name: '毛泽东思想万岁(1949-1957卷)',
      type: 'pdf',
      internal: false,
      official: false,
      author: '未知',
      files: '/books/wansui3a.pdf',
    },
    parser_option: {
      page_limits: [[9, 508]],
    },
    parser: wansui_parser.parse,
    path: join(normalize(__dirname), '../public/books/wansui3a.pdf'),
  },
  {
    entity: {
      id: 'wansui4',
      type: 'pdf',
      name: '毛泽东思想万岁(1958-1960卷)',
      internal: false,
      official: false,
      author: '未知',
      files: '/books/wansui4a.pdf',
    },
    parser_option: {
      page_limits: [[11, 674]],
    },
    parser: wansui_parser.parse,
    path: join(normalize(__dirname), '../public/books/wansui4a.pdf'),
  },
  {
    entity: {
      id: 'wansui5',
      name: '毛泽东思想万岁(1961-1968卷)',
      type: 'pdf',
      internal: false,
      official: false,
      author: '未知',
      files: '/books/wansui5a.pdf',
    },
    parser_option: {
      page_limits: [[16, 668]],
    },
    parser: wansui_parser.parse,
    path: join(normalize(__dirname), '../public/books/wansui5a.pdf'),
  },
  {
    entity: {
      id: 'wenji1',
      type: 'pdf',
      name: '毛泽东文集第一卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji1.pdf',
    },
    parser_option: {
      page_limits: [[14, 526]],
      page_width: 435.2,
      content_min_x: 74.5,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji1.pdf'),
  },
  {
    entity: {
      id: 'wenji2',
      name: '毛泽东文集第二卷(1999)',
      type: 'pdf',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji2.pdf',
    },
    parser_option: {
      page_limits: [[14, 481]],
      page_width: 393.2,
      content_min_x: 44.88,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji2.pdf'),
  },
  {
    entity: {
      id: 'wenji3',
      type: 'pdf',
      name: '毛泽东文集第三卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji3.pdf',
    },
    parser_option: {
      page_limits: [[12, 467]],
      page_width: 442,
      content_min_x: 74.28,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji3.pdf'),
  },
  {
    entity: {
      type: 'pdf',
      id: 'wenji4',
      name: '毛泽东文集第四卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji4.pdf',
    },
    parser_option: {
      page_limits: [[15, 354]],
      page_width: 442,
      content_min_x: 74.28,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji4.pdf'),
  },
  {
    entity: {
      type: 'pdf',
      id: 'wenji5',
      name: '毛泽东文集第五卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji5.pdf',
    },
    parser_option: {
      page_limits: [[14, 363]],
      page_width: 382,
      content_min_x: 45.84,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji5.pdf'),
  },
  {
    entity: {
      id: 'wenji6',
      type: 'pdf',
      name: '毛泽东文集第六卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji6.pdf',
    },
    parser_option: {
      page_limits: [[15, 527]],
      page_width: 449.5,
      content_min_x: 72.28,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji6.pdf'),
  },
  {
    entity: {
      id: 'wenji7',
      type: 'pdf',
      name: '毛泽东文集第七卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji7.pdf',
    },
    parser_option: {
      page_limits: [[10, 474]],
      page_width: 389.5,
      content_min_x: 43.24,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji7.pdf'),
  },
  {
    entity: {
      id: 'wenji8',
      type: 'pdf',
      name: '毛泽东文集第八卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji8.pdf',
    },
    parser_option: {
      page_limits: [[12, 457]],
      page_width: 389.5,
      content_min_x: 43.24,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji8.pdf'),
  },
  {
    entity: {
      id: 'jqjianghua',
      type: 'pdf',
      name: '江青十年讲话汇编',
      internal: false,
      official: false,
      author: '',
      files: '/books/jqjianghua.pdf',
    },
    parser_option: {
      page_limits: [
        [7, 730],
        [736, 752],
      ],
    },
    parser: jqjianghua_parser.parse,
    path: join(normalize(__dirname), '../public/books/jqjianghua.pdf'),
  },
  {
    entity: {
      id: 'xuanji1',
      type: 'pdf',
      name: '毛泽东选集第一卷(1967)',
      internal: false,
      official: true,
      author: '毛泽东',
      files: '/books/毛泽东选集(1967)1.pdf',
    },
    parser_option: {
      page_limits: [[12, 321]],
      name: 'xuanji1',
    },
    parser: xuanji_parser.parse,
    path: join(normalize(__dirname), '../public/books/毛泽东选集(1967)1.pdf'),
  },
  {
    entity: {
      id: 'xuanji2',
      name: '毛泽东选集第二卷(1967)',
      type: 'pdf',
      internal: false,
      official: true,
      author: '毛泽东',
      files: '/books/毛泽东选集(1967)2.pdf',
    },
    parser_option: {
      page_limits: [[12, 441]],
      name: 'xuanji2',
    },
    parser: xuanji_parser.parse,
    path: join(normalize(__dirname), '../public/books/毛泽东选集(1967)2.pdf'),
  },
  {
    entity: {
      id: 'xuanji3',
      name: '毛泽东选集第三卷(1967)',
      type: 'pdf',
      internal: false,
      official: true,
      author: '毛泽东',
      files: '/books/毛泽东选集(1967)3.pdf',
    },
    parser_option: {
      page_limits: [[10, 329]],
      name: 'xuanji3',
    },
    parser: xuanji_parser.parse,
    path: join(normalize(__dirname), '../public/books/毛泽东选集(1967)3.pdf'),
  },
  {
    entity: {
      id: 'xuanji4',
      name: '毛泽东选集第四卷(1967)',
      internal: false,
      official: true,
      type: 'pdf',
      author: '毛泽东',
      files: '/books/毛泽东选集(1967)4.pdf',
    },
    parser_option: {
      page_limits: [[10, 395]],
      name: 'xuanji4',
    },
    parser: xuanji_parser.parse,
    path: join(normalize(__dirname), '../public/books/毛泽东选集(1967)4.pdf'),
  },
  {
    entity: {
      id: 'xuanji5',
      name: '毛泽东选集第五卷(1977)',
      internal: false,
      type: 'pdf',
      official: true,
      author: '毛泽东',
      files: '/books/毛泽东选集(1977)5.pdf',
    },
    parser_option: {
      page_limits: [[16, 513]],
      page_width: 602,
      content_min_x: 90,
      header_min_height: 17,
      name: 'xuanji5',
    },
    parser: xuanji_parser.parse,
    path: join(normalize(__dirname), '../public/books/毛泽东选集(1977)5.pdf'),
  },
  {
    entity: {
      id: 'yaowenyuan',
      name: '姚文元文录',
      internal: false,
      type: 'pdf',
      official: true,
      author: '姚文元',
      files: '/books/姚文元文录.pdf',
    },
    parser_option: {
      page_limits: [[12, 876]],
    },
    parser: yaowenyuan.parse,
    path: join(normalize(__dirname), '../public/books/姚文元文录.pdf'),
  },
  {
    entity: {
      id: 'maoquanji27',
      name: '毛泽东全集第27卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/27-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 31],
        ...exclude(
          [32, 537],
          [
            50, 58, 61, 78, 86, 90, 92, 93, 94, 95, 96, 97, 98, 99, 131, 153,
            159, 163, 170, 176, 178, 187, 188, 198, 222, 231, 255, 256, 257,
            258, 259, 260, 261, 262, 263, 270, 273, 280, 281, 282, 283, 284,
            285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 297, 300, 309,
            310, 312, 314, 316, 319, 323, 324, 325, 326, 328, 329, 332, 336,
            337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349,
            350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362,
            363, 364, 365, 366, 367, 369, 399, 400, 409, 413, 416, 422, 426,
            428, 429, 442, 443, 449, 468, 486, 497, 518, 530,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/27-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji28',
      name: '毛泽东全集第28卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/28-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 34],
        ...exclude(
          [35, 540],
          [
            42, 51, 55, 57, 61, 72, 85, 89, 90, 91, 92, 93, 94, 95, 96, 102,
            103, 116, 118, 120, 122, 125, 129, 132, 134, 139, 149, 160, 161,
            163, 173, 190, 198, 200, 201, 205, 207, 218, 219, 221, 223, 225,
            227, 228, 231, 237, 239, 241, 246, 257, 262, 265, 267, 268, 273,
            277, 279, 282, 289, 291, 293, 295, 298, 300, 302, 305, 309, 312,
            314, 324, 330, 332, 334, 335, 338, 340, 346, 348, 352, 354, 356,
            366, 375, 377, 379, 383, 393, 394, 399, 401, 407, 409, 412, 416,
            419, 425, 430, 432, 445, 453, 454, 455, 474, 476, 478, 481, 488,
            489, 490, 491, 492, 493, 494, 495, 496, 497, 503, 504, 510, 511,
            512, 513, 516, 517, 519, 525, 526, 530, 533,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/28-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji29',
      name: '毛泽东全集第29卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/29-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 37],
        ...exclude(
          [38, 547],
          [
            39, 44, 54, 56, 74, 76, 79, 93, 109, 124, 129, 150, 169, 171, 175,
            181, 183, 184, 185, 186, 187, 188, 189, 198, 200, 201, 202, 203,
            204, 214, 218, 220, 221, 237, 277, 278, 293, 327, 328, 329, 330,
            333, 369, 394, 400, 402, 411, 439, 448, 462, 473, 477, 479, 490,
            495, 497, 499, 501, 503, 505, 532, 536, 539, 540, 543,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/29-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji30',
      name: '毛泽东全集第30卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/30-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 36],
        ...exclude(
          [37, 541],
          [
            46, 59, 81, 104, 128, 130, 152, 191, 204, 215, 219, 235, 254, 260,
            263, 265, 267, 270, 275, 296, 298, 314, 330, 331, 332, 333, 348,
            349, 350, 361, 368, 369, 370, 371, 372, 388, 390, 398, 410, 411,
            455, 463, 469, 472, 473, 474, 483, 494, 497, 509, 513, 514, 524,
            530,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/30-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji31',
      name: '毛泽东全集第31卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/31-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 39],
        ...exclude(
          [40, 548],
          [
            41, 42, 45, 46, 56, 59, 64, 81, 92, 97, 99, 107, 139, 143, 162, 176,
            213, 216, 238, 300, 362, 363, 364, 376, 396, 440, 448, 449, 502,
            504, 505,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/31-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji32',
      name: '毛泽东全集第32卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/32-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 34],
        ...exclude(
          [35, 535],
          [
            50, 95, 96, 97, 111, 112, 114, 123, 125, 136, 149, 154, 165, 192,
            193, 198, 203, 205, 209, 212, 213, 214, 230, 231, 247, 250, 265,
            270, 272, 273, 274, 279, 282, 290, 309, 313, 314, 315, 316, 317,
            318, 319, 321, 322, 323, 324, 326, 338, 340, 350, 351, 359, 374,
            387, 391, 409, 411, 415, 417, 418, 426, 427, 437, 478, 479, 480,
            481, 482, 500, 501, 502, 503, 505, 506, 507, 508, 509, 510, 511,
            512, 513, 514, 515, 516, 517, 518, 519, 521, 522, 523, 524, 525,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/32-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji33',
      name: '毛泽东全集第33卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/33-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 31],
        ...exclude(
          [32, 537],
          [
            43, 53, 54, 71, 101, 126, 127, 128, 132, 133, 134, 137, 141, 142,
            150, 151, 152, 155, 156, 165, 174, 186, 187, 189, 190, 210, 222,
            225, 231, 232, 236, 241, 246, 262, 271, 282, 295, 305, 307, 312,
            320, 322, 323, 331, 332, 333, 337, 338, 351, 352, 359, 363, 364,
            365, 374, 375, 377, 381, 387, 409, 412, 414, 415, 432, 437, 438,
            449, 451, 456, 462, 463, 464, 466, 475, 479, 482, 484, 489, 496,
            498, 500, 502, 504, 512, 515, 516, 517, 520, 525, 526, 527, 528,
            529, 530, 531, 534,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/33-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji34',
      name: '毛泽东全集第34卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/34-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 26],
        ...exclude(
          [27, 529],
          [
            43, 44, 48, 57, 58, 59, 60, 63, 70, 73, 74, 75, 77, 83, 86, 89, 90,
            93, 94, 95, 96, 97, 98, 100, 101, 102, 103, 107, 108, 111, 113, 148,
            150, 151, 161, 166, 168, 169, 170, 181, 182, 183, 184, 185, 186,
            187, 188, 189, 190, 192, 199, 205, 206, 213, 214, 216, 227, 243,
            244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256,
            257, 258, 259, 263, 264, 265, 266, 267, 268, 269, 273, 278, 279,
            314, 321, 326, 327, 328, 331, 350, 355, 380, 392, 394, 396, 397,
            402, 403, 404, 405, 406, 411, 412, 414, 415, 425, 430, 438, 440,
            447, 455, 461, 472, 479, 496, 521,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/34-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji35',
      name: '毛泽东全集第35卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/35-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 25],
        ...exclude(
          [26, 533],
          [
            27, 28, 35, 45, 46, 49, 53, 54, 55, 58, 59, 61, 62, 66, 73, 91, 92,
            93, 94, 109, 116, 129, 131, 158, 159, 160, 161, 162, 163, 164, 165,
            166, 167, 168, 169, 170, 171, 183, 200, 209, 210, 211, 216, 218,
            219, 270, 272, 335, 371, 372, 385, 459, 460, 461, 462, 463, 464,
            465, 470, 471, 472, 473, 477, 519,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/35-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji36',
      name: '毛泽东全集第36卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/36-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 23],
        ...exclude(
          [24, 528],
          [
            31, 32, 46, 47, 58, 67, 74, 75, 77, 80, 90, 92, 101, 104, 112, 127,
            128, 130, 132, 133, 139, 140, 142, 143, 144, 145, 146, 147, 148,
            149, 150, 151, 152, 153, 154, 156, 157, 158, 159, 160, 162, 163,
            164, 174, 184, 192, 193, 195, 199, 200, 201, 204, 205, 206, 207,
            219, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 241, 247,
            263, 264, 265, 297, 319, 342, 343, 344, 345, 346, 349, 352, 355,
            356, 360, 362, 363, 364, 366, 367, 368, 369, 370, 371, 372, 373,
            375, 376, 379, 381, 382, 388, 391, 392, 393, 394, 395, 419, 447,
            449, 474, 517, 518,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/36-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji37',
      name: '毛泽东全集第37卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/37-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 19],
        ...exclude(
          [20, 522],
          [
            25, 26, 27, 28, 30, 37, 38, 39, 40, 41, 42, 45, 46, 76, 88, 89, 90,
            91, 94, 98, 105, 106, 107, 108, 109, 110, 111, 112, 119, 120, 121,
            122, 146, 147, 148, 163, 167, 183, 186, 194, 195, 205, 214, 215,
            217, 218, 226, 228, 271, 275, 301, 351, 352, 356, 357, 358, 359,
            360, 361, 362, 363, 364, 365, 366, 425, 426, 464,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/37-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji38',
      name: '毛泽东全集第38卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/38-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [12, 25],
        ...exclude(
          [26, 532],
          [
            29, 33, 45, 60, 63, 68, 76, 84, 85, 95, 96, 97, 98, 99, 100, 101,
            102, 103, 104, 115, 118, 193, 217, 218, 219, 220, 221, 225, 238,
            239, 241, 264, 267, 294, 297, 298, 299, 300, 301, 302, 304, 314,
            334, 335, 336, 349, 350, 351, 352, 353, 367, 368, 369, 381, 384,
            386, 389, 394, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419,
            420, 421, 438, 455, 456, 457, 458, 511, 512, 523, 531,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/38-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji39',
      name: '毛泽东全集第39卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/39-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 24],
        ...exclude(
          [25, 529],
          [
            26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 45, 59, 60, 85, 117,
            118, 119, 120, 121, 122, 123, 124, 128, 151, 152, 159, 160, 161,
            162, 163, 164, 165, 166, 197, 198, 199, 200, 201, 202, 203, 204,
            223, 224, 225, 226, 227, 233, 234, 235, 241, 242, 243, 244, 245,
            246, 247, 248, 249, 250, 258, 259, 260, 261, 262, 263, 264, 271,
            290, 300, 307, 361, 363, 373, 379, 380, 381, 382, 383, 384, 385,
            420, 421, 422, 434, 443, 444, 445, 456, 457, 460, 466, 468, 483,
            487, 508, 509, 515, 518, 519, 521, 522, 523, 524, 525, 526, 527,
            528,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/39-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji40',
      name: '毛泽东全集第40卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/40-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 22],
        ...exclude(
          [23, 528],
          [
            25, 26, 27, 28, 29, 30, 31, 32, 33, 37, 50, 53, 54, 55, 56, 57, 58,
            59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 163, 165, 167, 168, 170,
            171, 172, 173, 174, 175, 176, 177, 178, 182, 183, 184, 185, 186,
            187, 188, 189, 190, 191, 192, 193, 194, 196, 197, 198, 199, 201,
            203, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216,
            217, 218, 219, 220, 221, 222, 223, 224, 225, 227, 228, 229, 230,
            231, 232, 233, 234, 235, 236, 237, 238, 241, 242, 243, 244, 245,
            246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258,
            259, 261, 270, 273, 274, 278, 279, 280, 281, 282, 283, 284, 293,
            303, 311, 322, 332, 333, 334, 392, 426, 427, 428, 429, 430, 431,
            481, 482, 483, 486, 519,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/40-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji41',
      name: '毛泽东全集第41卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/41-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 26],
        ...exclude(
          [27, 532],
          [
            53, 54, 60, 71, 98, 99, 100, 101, 125, 126, 127, 128, 129, 130, 136,
            138, 141, 147, 150, 152, 160, 164, 186, 209, 322, 323, 328, 333,
            334, 335, 336, 337, 338, 358, 360, 361, 362, 445, 446, 447, 448,
            455, 456, 463, 503, 504, 505, 506, 507, 527,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/41-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji42',
      name: '毛泽东全集第42卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/42-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 28],
        ...exclude(
          [29, 534],
          [
            46, 47, 48, 49, 56, 57, 111, 112, 113, 114, 115, 116, 117, 118, 119,
            120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132,
            133, 134, 135, 136, 137, 138, 139, 153, 154, 155, 156, 159, 160,
            164, 191, 192, 219, 228, 229, 265, 274, 275, 320, 359, 372, 373,
            374, 375, 376, 377, 384, 385, 387, 388, 389, 390, 391, 392, 393,
            394, 395, 396, 399, 403, 404, 405, 406, 407, 408, 409, 410, 411,
            412, 413, 414, 415, 416, 421, 422, 423, 424, 425, 445, 453, 464,
            465, 466, 467, 468, 480, 481, 507, 508,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/42-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji43',
      name: '毛泽东全集第43卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/43-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 25],
        ...exclude(
          [26, 532],
          [
            29, 30, 33, 90, 93, 94, 96, 98, 104, 105, 136, 137, 154, 167, 168,
            169, 229, 230, 231, 232, 233, 234, 235, 242, 256, 272, 273, 278,
            279, 283, 291, 293, 294, 295, 296, 301, 302, 303, 304, 305, 306,
            307, 308, 309, 310, 311, 312, 313, 337, 338, 339, 340, 341, 342,
            346, 373, 379, 385, 389, 393, 399, 418, 419, 420, 422, 423, 424,
            428, 429, 430, 431, 432, 433, 434, 435, 445, 465, 472, 473, 474,
            475, 476, 490, 492, 496, 497, 498, 514, 516, 517, 518, 519,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/43-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji44',
      name: '毛泽东全集第44卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/44-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 25],
        ...exclude(
          [26, 534],
          [
            32, 59, 60, 65, 66, 76, 87, 95, 96, 97, 98, 103, 121, 130, 141, 143,
            162, 172, 194, 202, 203, 237, 253, 254, 255, 262, 263, 275, 276,
            277, 278, 288, 295, 315, 316, 317, 321, 322, 323, 324, 328, 330,
            340, 342, 343, 344, 349, 351, 352, 353, 354, 355, 356, 357, 358,
            364, 369, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381,
            382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394,
            395, 396, 397, 398, 399, 400, 401, 425, 428, 429, 433, 438, 439,
            440, 441, 457, 459, 467, 470, 474, 482, 483, 494, 496, 500, 501,
            503, 504, 505, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519,
            520, 529, 530, 531,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/44-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji45',
      name: '毛泽东全集第45卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/45-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 26],
        ...exclude(
          [28, 530],
          [
            42, 43, 45, 84, 93, 96, 108, 109, 110, 123, 127, 128, 148, 153, 154,
            155, 156, 157, 158, 161, 167, 173, 186, 192, 193, 201, 208, 219,
            224, 244, 250, 261, 262, 271, 277, 279, 280, 281, 290, 294, 298,
            300, 307, 314, 315, 320, 322, 324, 325, 329, 332, 337, 338, 342,
            361, 362, 364, 365, 366, 368, 372, 373, 377, 383, 392, 409, 410,
            425, 426, 427, 457, 466, 467, 470, 471, 472, 478, 492, 493, 494,
            495, 496, 504, 521,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/45-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji46',
      name: '毛泽东全集第46卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/46-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 24],
        ...exclude(
          [25, 525],
          [
            30, 31, 45, 48, 49, 54, 59, 60, 61, 62, 63, 64, 65, 69, 73, 84, 94,
            95, 96, 97, 98, 118, 130, 143, 157, 160, 173, 178, 179, 180, 181,
            187, 190, 191, 197, 199, 202, 203, 223, 258, 288, 289, 292, 294,
            332, 335, 344, 350, 367, 381, 388, 389, 390, 391, 392, 393, 394,
            395, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412,
            462, 466, 475, 477, 514, 515, 519, 520,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/46-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji47',
      name: '毛泽东全集第47卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/47-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 26],
        ...exclude(
          [27, 533],
          [
            28, 30, 40, 41, 72, 100, 113, 138, 151, 165, 167, 179, 180, 181,
            185, 186, 196, 203, 204, 205, 225, 226, 245, 246, 247, 254, 269,
            281, 282, 287, 292, 295, 314, 317, 340, 341, 342, 358, 359, 360,
            361, 362, 367, 370, 372, 375, 378, 380, 383, 403, 405, 407, 415,
            426, 427, 428, 481, 483, 484, 486, 494, 511, 512, 513, 514, 515,
            516, 517,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/47-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji48',
      name: '毛泽东全集第48卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/48-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 26],
        ...exclude(
          [27, 527],
          [
            29, 47, 48, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 66, 78, 79,
            91, 92, 96, 97, 99, 100, 105, 109, 114, 115, 117, 124, 125, 126,
            128, 169, 170, 174, 175, 177, 191, 194, 196, 203, 206, 211, 212,
            213, 214, 215, 216, 217, 225, 239, 247, 282, 285, 288, 289, 308,
            314, 316, 356, 363, 364, 365, 366, 376, 377, 378, 389, 393, 394,
            395, 399, 400, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418,
            419, 420, 421, 435, 436, 437, 438, 453, 454, 455, 456, 457, 458,
            459, 460, 466, 469, 472, 478, 479, 480, 481, 482, 483, 484, 485,
            486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498,
            499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 514,
            515, 516, 517, 519, 526,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/48-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji49',
      name: '毛泽东全集第49卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/49-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 28],
        ...exclude(
          [29, 547],
          [
            30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
            47, 48, 49, 50, 53, 54, 76, 77, 78, 79, 80, 81, 82, 83, 84, 86, 88,
            89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
            105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
            123, 124, 125, 126, 127, 128, 129, 143, 144, 145, 146, 147, 148,
            155, 156, 157, 158, 159, 160, 161, 162, 168, 169, 170, 171, 172,
            173, 174, 175, 176, 177, 178, 185, 186, 187, 188, 189, 190, 191,
            192, 193, 194, 195, 196, 197, 198, 205, 206, 207, 208, 209, 210,
            211, 212, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226,
            227, 232, 233, 234, 235, 236, 237, 238, 239, 240, 245, 246, 247,
            251, 255, 256, 257, 271, 303, 359, 360, 361, 362, 384, 416, 424,
            425, 442, 446, 447, 448, 470, 471, 472, 491, 492, 493, 495, 503,
            504, 505, 506, 517, 522, 536, 543, 544,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/49-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji50',
      name: '毛泽东全集第50卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/50-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 30],
        ...exclude(
          [31, 534],
          [
            33, 39, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 118,
            127, 138, 139, 146, 169, 170, 171, 197, 199, 202, 263, 264, 267,
            285, 303, 314, 317, 318, 319, 320, 327, 328, 382, 392, 401, 402,
            419, 420, 421, 422, 423, 424, 443, 446, 447, 448, 449, 450, 451,
            452, 459, 461, 475, 482, 483, 495, 496, 498, 499, 500, 501, 502,
            503, 511, 519, 524,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/50-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji51',
      name: '毛泽东全集第51卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/51-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [12, 28],
        ...exclude(
          [29, 549],
          [
            39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 55, 62, 67, 72, 73, 84, 85,
            95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 123, 126, 129,
            130, 165, 166, 167, 190, 191, 200, 202, 222, 258, 271, 284, 289,
            291, 292, 305, 306, 307, 308, 309, 310, 323, 347, 348, 349, 350,
            351, 369, 372, 374, 375, 376, 380, 400, 403, 405, 411, 412, 414,
            425, 426, 427, 428, 429, 431, 435, 440, 442, 443, 446, 447, 448,
            462, 464, 467, 477, 478, 481, 484, 485, 486, 487, 492, 493, 494,
            495, 504, 506, 509, 510, 511, 512, 514, 515, 517, 526, 533, 534,
            536, 537, 538, 544,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/51-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji52',
      name: '毛泽东全集第52卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/52-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 21],
        ...exclude(
          [22, 499],
          [
            34, 35, 36, 38, 47, 48, 54, 55, 61, 64, 73, 81, 86, 94, 98, 121,
            122, 128, 130, 133, 142, 146, 150, 163, 164, 165, 166, 167, 168,
            169, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186,
            187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199,
            200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 235, 237,
            244, 247, 250, 260, 262, 268, 273, 277, 279, 287, 293, 296, 299,
            303, 304, 306, 308, 313, 316, 325, 326, 333, 342, 352, 357, 359,
            370, 373, 376, 378, 388, 393, 397, 400, 406, 409, 414, 418, 422,
            430, 435, 437, 439, 442, 446, 449, 450, 453, 454, 496,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/52-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'wanghongwen',
      name: '王洪文文集',
      internal: false,
      type: 'pdf',
      official: true,
      author: '王洪文',
      files: '/books/王洪文文集.pdf',
    },
    parser_option: {
      page_limits: [[4, 66]],
    },
    parser: wanghongwen.parse,
    path: join(normalize(__dirname), '../public/books/王洪文文集.pdf'),
  },
  {
    entity: {
      id: 'wanghongwen1',
      name: '王洪文同志在山东重点企业批林批孔汇报会议上的讲话',
      internal: false,
      official: false,
      type: 'img',
      author: '王洪文',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/wanghongwen1/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 8]],
    },
    parser: wanghongwen1.parse,
    path: join(normalize(__dirname), '../public/books/archives1/wanghongwen1'),
  },
  {
    entity: {
      id: 'wanghongwen2',
      name: '关于无产阶级文化大革命问题',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(10)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/wanghongwen2/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 10]],
    },
    parser: wanghongwen2.parse,
    path: join(normalize(__dirname), '../public/books/archives1/wanghongwen2'),
  },
  {
    entity: {
      id: 'wanghongwen3',
      name: '王洪文同志在接见四川大足汽车厂在北京学习班同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/wanghongwen3/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 4]],
    },
    parser: wanghongwen3.parse,
    path: join(normalize(__dirname), '../public/books/archives1/wanghongwen3'),
  },
  {
    entity: {
      id: 'wanghongwen4',
      name: '王洪文在沪东造船厂发动群众对敌斗争现场会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/wanghongwen4/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 2]],
    },
    parser: wanghongwen4.parse,
    path: join(normalize(__dirname), '../public/books/archives1/wanghongwen4'),
  },
  {
    entity: {
      id: 'wanghongwen5',
      name: '工总司负责人王洪文同志一月十一日在长宁区俱乐部的重要讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/wanghongwen5/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 4]],
    },
    parser: wanghongwen5.parse,
    path: join(normalize(__dirname), '../public/books/archives1/wanghongwen5'),
  },
  {
    entity: {
      id: 'wanghongwen6',
      name: '市革会领导成员、工总司主要负责人王洪文同志一九六七年十二月廿二日下午在铁路文化宫大会上的重要讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(6)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/wanghongwen6/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 6]],
    },
    parser: wanghongwen6.parse,
    path: join(normalize(__dirname), '../public/books/archives1/wanghongwen6'),
  },
  {
    entity: {
      id: 'wanghongwen7',
      name: '上海市机电一局系统活学活用毛泽东思想积极分子代表大会上市革委会领导成员、工总司负责人王洪文同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(5)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/wanghongwen7/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 5]],
    },
    parser: wanghongwen7.parse,
    path: join(normalize(__dirname), '../public/books/archives1/wanghongwen7'),
  },
  {
    entity: {
      id: 'wanghongwen8',
      name: '王洪文副主席重要电话指示',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(1)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/wanghongwen8/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 1]],
    },
    parser: wanghongwen8.parse,
    path: join(normalize(__dirname), '../public/books/archives1/wanghongwen8'),
  },
  {
    entity: {
      id: 'wanghongwen9',
      name: '“四人帮”罪行材料（八）',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/wanghongwen9/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 3]],
    },
    parser: wanghongwen9.parse,
    path: join(normalize(__dirname), '../public/books/archives1/wanghongwen9'),
  },
  {
    entity: {
      id: 'wanghongwen10',
      name: '王洪文付主席和马天水同志的谈话',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(1)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/wanghongwen10/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 1]],
    },
    parser: wanghongwen10.parse,
    path: join(normalize(__dirname), '../public/books/archives1/wanghongwen10'),
  },
  {
    entity: {
      id: 'wanghongwen11',
      name: '王洪文关于学习毛主席理论问题指示的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/wanghongwen11/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 8]],
    },
    parser: wanghongwen11.parse,
    path: join(normalize(__dirname), '../public/books/archives1/wanghongwen11'),
  },
  {
    entity: {
      id: 'wenku',
      name: '中国文化大革命文库(第一版)',
      internal: false,
      type: 'db',
      official: false,
      author: '宋永毅',
      files: '',
    },
    parser_option: {
      page_limits: [],
    },
    parser: wenku_parser.parse,
    path: join(normalize(__dirname), '../public/TheGPCRdatabase'),
  },
  {
    entity: {
      id: 'jimi',
      name: '机密档案中新发现的毛泽东讲话',
      internal: false,
      official: false,
      type: 'epub',
      author: '',
      files: `/books/机密档案中新发现的毛泽东讲话.epub`,
    },
    parser_option: {
      page_limits: [],
    },
    parser: jimi.parse,
    path: join(
      normalize(__dirname),
      '../public/books/机密档案中新发现的毛泽东讲话.epub',
    ),
  },
  {
    entity: {
      id: 'zzj1',
      name: '中共中央政治局同志7月30日晚接见全国计划工作座谈会全体同志时的讲话',
      internal: true,
      official: true,
      author: '',
      type: 'pdf',
      files: '/books/zzj1.pdf',
    },
    parser_option: {
      page_limits: [[1, 6]],
    },
    parser: zzj1.parse,
    path: join(normalize(__dirname), '../public/books/zzj1.pdf'),
  },
  {
    entity: {
      id: 'yaowenyuan1',
      name: '姚文元同志在上海市革命委员会报告会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '姚文元',
      files: new Array(10)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/yaowenyuan1/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 10]],
    },
    parser: yaowenyuan1.parse,
    path: join(normalize(__dirname), '../public/books/archives/yaowenyuan1'),
  },
  {
    entity: {
      id: 'yaowenyuan2',
      name: '姚文元同志在欢庆黄浦区革命委员会成立大会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '姚文元',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/yaowenyuan2/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 4]],
    },
    parser: yaowenyuan2.parse,
    path: join(normalize(__dirname), '../public/books/archives/yaowenyuan2'),
  },
  {
    entity: {
      id: 'yaowenyuan3',
      name: '关于国际形势的报告',
      internal: true,
      official: true,
      type: 'img',
      author: '姚文元',
      files: new Array(15)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/yaowenyuan3/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 15]],
    },
    parser: yaowenyuan3.parse,
    path: join(normalize(__dirname), '../public/books/archives/yaowenyuan3'),
  },
  {
    entity: {
      id: 'zhangchunqiao',
      name: '春桥文录',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张春桥',
      files: '/books/zhangchunqiao.pdf',
    },
    parser_option: {
      page_limits: [[5, 290]],
    },
    parser: zhangchunqiao.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao.pdf'),
  },
  {
    entity: {
      id: 'zhangchunqiao1',
      name: '“四人帮”罪行材料（六）',
      internal: true,
      official: true,
      type: 'img',
      author: '张春桥',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao1/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[2, 4]],
    },
    parser: zhangchunqiao1.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives1/zhangchunqiao1',
    ),
  },
  {
    entity: {
      id: 'zhangchunqiao2',
      name: '“四人帮”罪行材料（二）',
      internal: true,
      official: true,
      type: 'img',
      author: '张春桥',
      files: new Array(10)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao2/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[2, 10]],
    },
    parser: zhangchunqiao2.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives1/zhangchunqiao2',
    ),
  },

  {
    entity: {
      id: 'zhangchunqiao3',
      name: '张春桥主任一九七五年三月一日在全军各大单位政治部主任座谈会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '张春桥',
      files: new Array(21)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao3/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 21]],
    },
    parser: zhangchunqiao3.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives1/zhangchunqiao3',
    ),
  },
  {
    entity: {
      id: 'zhangchunqiao4',
      name: '关于日本问题的报告',
      internal: true,
      official: true,
      type: 'img',
      author: '张春桥',
      files: new Array(6)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao4/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 6]],
    },
    parser: zhangchunqiao4.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives1/zhangchunqiao4',
    ),
  },
  {
    entity: {
      id: 'zhangchunqiao5',
      name: '张春桥同志重要报告',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(19)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao5/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[3, 19]],
    },
    parser: zhangchunqiao5.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives1/zhangchunqiao5',
    ),
  },
  {
    entity: {
      id: 'zhangchunqiao6',
      name: '张春桥同志在上海市革命委员会报告会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(16)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao6/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 16]],
    },
    parser: zhangchunqiao6.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives1/zhangchunqiao6',
    ),
  },
  {
    entity: {
      id: 'zhangchunqiao7',
      name: '张春桥同志十二月十日下午接见宣传系统代表讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao7/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 8]],
    },
    parser: zhangchunqiao7.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives1/zhangchunqiao7',
    ),
  },
  {
    entity: {
      id: 'zhangchunqiao8',
      name: '内部参考',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(5)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao8/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 5]],
    },
    parser: zhangchunqiao8.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives1/zhangchunqiao8',
    ),
  },
  {
    entity: {
      id: 'zhangchunqiao9',
      name: '张春桥同志接见福建部分赴京革命同学的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao9/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 3]],
    },
    parser: zhangchunqiao9.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives1/zhangchunqiao9',
    ),
  },
  {
    entity: {
      id: 'zhangchunqiao10',
      name: '张春桥同志接见上海《红革会》与《工人革命造反总司令部》代表的谈话记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao10/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 8]],
    },
    parser: zhangchunqiao10.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives1/zhangchunqiao10',
    ),
  },
  {
    entity: {
      id: 'zhangchunqiao11',
      name: '张春桥同志十一月二十五日在市革会扩大会议上的讲话纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(5)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao11/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 5]],
    },
    parser: zhangchunqiao11.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives1/zhangchunqiao11',
    ),
  },
  {
    entity: {
      id: 'zhangchunqiao12',
      name: '张春桥同志二月二十五日与华东局革命造反派座谈纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao12/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 3]],
    },
    parser: zhangchunqiao12.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives1/zhangchunqiao12',
    ),
  },
  {
    entity: {
      id: 'zhangchunqiao13',
      name: '张春桥同志讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao13/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 3]],
    },
    parser: zhangchunqiao13.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives1/zhangchunqiao13',
    ),
  },
  {
    entity: {
      id: 'zhangchunqiao14',
      name: '在工总司召开的“坚决响应毛主席伟大号召，‘斗私批修’誓师大会”上张春桥同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao14/${
              idx + 1
            }.png`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 4]],
    },
    parser: zhangchunqiao14.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives1/zhangchunqiao14',
    ),
  },
  {
    entity: {
      id: 'zhangchunqiao15',
      name: '未知出处材料',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/zhangchunqiao15/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 3]],
    },
    parser: zhangchunqiao15.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives1/zhangchunqiao15',
    ),
  },
  {
    entity: {
      id: 'maoyuanxin1',
      name: '毛远新破坏民兵建设的部分罪行材料',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(16)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/maoyuanxin1/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[5, 16]],
    },
    parser: maoyuanxin1.parse,
    path: join(normalize(__dirname), '../public/books/archives1/maoyuanxin1'),
  },
  {
    entity: {
      id: 'maoyuanxin2',
      name: '毛远新同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/maoyuanxin2/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 2]],
    },
    parser: maoyuanxin2.parse,
    path: join(normalize(__dirname), '../public/books/archives1/maoyuanxin2'),
  },
  {
    entity: {
      id: 'maoyuanxin3',
      name: '毛远新同志在辽革站赴京代表团揭发批判宋任穷会议上的讲话纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(1)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/maoyuanxin3/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 1]],
    },
    parser: maoyuanxin3.parse,
    path: join(normalize(__dirname), '../public/books/archives1/maoyuanxin3'),
  },
  {
    entity: {
      id: 'maoyuanxin4',
      name: '毛远新一九七四年一月在团省委召开的“学习吴献忠座谈会”上的讲话（节录）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map(
          (i, idx) =>
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/maoyuanxin4/${
              idx + 1
            }.jpg`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [[2, 9]],
    },
    parser: maoyuanxin4.parse,
    path: join(normalize(__dirname), '../public/books/archives1/maoyuanxin4'),
  }
].map((i) => {
  const book: Book = {
    entity: i.entity,
    parser_option: i.parser_option as ParserOption,
    path: i.path,
    parser: async (path: string, opt: ParserOption) => {
      const res = await i.parser(path, opt);
      for (const j in res) {
        const article = res[j];
        for (const part of article.parts) {
          part.text = traditionalChineseToSimpleChinese(part.text);
        }
        for (let i = 0; i < article.comments.length; ++i) {
          article.comments[i] = traditionalChineseToSimpleChinese(
            article.comments[i],
          );
        }
        article.description = traditionalChineseToSimpleChinese(
          article.description,
        );
        const id = get_article_id(article);
        const p = join(patch_dir, `[${id}][${i.entity.id}].ts`);
        if (existsSync(p)) {
          const x = await import(p);
          for (const patch of x.default) {
            if (patch.version === 2) {
              res[j] = apply_patch_v2(res[j], patch);
            } else {
              apply_patch(article, patch);
            }
          }
        }
      }
      return res;
    },
  };
  return book;
});

export default books;
