import {
  ContentPart,
  ContentType,
  ParserOption,
  ParserResult,
} from '../../types';

export async function parse(
  imgPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const title = '姚文元同志在欢庆黄浦区革命委员会成立大会上的讲话';
  const parts: ContentPart[] =[{
    text: title,
    type: ContentType.title,
  }];
  const res: ParserResult[] = [
    {
      title,
      parts: [
        ...parts,
        ...`
坚决响应毛主席的伟大号召，不折不扣地实行革命的大联合、革命的“三结合”破私立公，把无产阶级文化大革命进行到底

三月二十日，姚文元同志在欢庆黄浦区革命委员会成立大会上代表上海市革命委员会和张春桥同志像全市无产阶级革命派发出号召：在一切工作中高举毛泽东思想伟大红旗，坚决执行以毛主席为代表的无产阶级革命路线，批判资产阶级反动路线，肃清刘、邓资产阶级反动路线的流毒，克服一切违背毛主席革命路线的错误倾向。

[本报讯]三月二十日，在欢庆黄浦区革命委员会成立大会上，姚文元通知作了重要讲话，摘要如下：

同志们，我们的一切工作（成绩）都是在毛主席思想照耀下取得的。当前上海无产阶级文化大革命，面临着一片大好形势。

自从二月廿四日张春桥同志就在这里传达了毛主席的最新指示以来，上海的文化大革命就沿着以毛主席为代表的无产阶级革命路线胜利前进！现在一月革命的风暴正在深入地发展，上海市革命委员会关于当前上海文化大革命的形势和任务决议草案里面提出的几项任务正在胜利地逐步实现。无产阶级革命派队伍边战斗、边整风，正在迅速地巩固、提高和扩大。越来越多的同志站到无产阶级革命派一边来，按单位、按部门、按系统、自下而上地实现革命的大联合和革命的“三结合”。这些经验正在不断地巩固和发展。向党内一小撮走资本主义道路的当权派进行斗争，正在越来越深刻的展开，越来越多的领导干部站起来同党内的一小撮走资本主义道路的当权派划清界限，彻底决裂，站到毛主席的革命路线这边来。

最近，中共中央又发表了给全国工矿企业的革命职工和革命干部的一封信。全上海的革命职工、革命干部正在热烈地响应毛主席、党中央的号召，誓作“抓革命、促生产”的模范。

总之，当前的形势越来越好，我们的胜利正在不断地巩固扩大。紧接着川沙县革命委员会的成立，现在黄浦区革命委员会也成立了，这就是当前大好形势的又一标志。

同志们，刚刚在这里讲到，就是我们夺权之后，要坚决贯彻以毛主席为代表的无产阶级革命路线。这是什么意思呢？就是在我们工作当中，要象毛主席所教导的那样，党中央所规定的那样，继续放手发动群众，相信群众，依靠群众，支持革命的首创精神，坚定地依靠无产阶级革命左派；坚决地实行革命的大联合，革命的三结合；巩固和加强无产阶级专政；抓革命、促生产；逐步地团结百分之九十五以上的群众和干部，把无产阶级文化大革命真正地进行到底。这一条路线，就是毛主席的路线。过去无产阶级革命派没有当权的时候，要执行这一条路线。现在从党内一小撮走资本主义道路当权派夺回自己权的时候，自己成为无产阶级当权派的时候，更要执行毛主席的这条路线。路线问题，方向问题，就是什么阶级掌握领导权的问题。执行毛主席的这条路线是当前一个非常重要的问题，就是要搞好革命的大联合和革命的三结合，也就是一个夺权的问题。

现在有些单位做得很好，但是也还有阻力。请同志们注意，中央在最近的信中有这样一句话：“希望你们成为实行革命大联合的模范，成为反对小团体主义、反对无政府主义、反对风头主义、反对经济主义、反对自私自利的模范。”

中央的这个指示非常重要，要实现革命的大联合，我们就要用毛泽东思想来整顿思想，整顿作风，整顿组织。千条万条学习毛主席著作第一条。所以我们要实现革命的大联合，就一定要用毛泽东思想来克服无政府主义、小团体主义、风头主义、经济主义等等这些错误倾向。大联合的过程也就是大立“公”字，大破“私”字的过程，也就是大立无产阶级世界观，大破资产阶级思想的过程。不把那些各式各样的“私”字破掉，革命的大联合是搞不好的，或者讲是不巩固的。为什么这里要讲一下革命的大联合问题呢？在这一方面，我们有些革命组织的负责人在思想上还有阻力。中央虽然号召了多次，但是，有些同志，还是前怕狼、后怕虎。下面这些问题，这些倾向，这些思想，我觉得，我们都要克服的。

我们还有一些同志，少数的同志，把功劳只归于自己。这场无产阶级文化大革命取得了很大的胜利。这胜利是怎么得来的呢？大家想一想。这是广大革命造反派日夜艰苦奋斗，是广大的革命工人、农民、干部、知识分子同党内一小撮走资本主义道路的当权派坚决斗争的结果。特别是毛主席，以毛主席为首的党中央在每一个关键时刻，给我们指出了斗争的方向，关心我们，支持我们。有了毛主席的领导，今天我们才取得了今天的成绩。如果要讲摘桃子的话，首先是以毛主席为代表的无产阶级革命路线，是无产阶级革命派，而不是哪一个人。如果看不到这一点，只看到想到自己，想不到今天的革命果实是怎样得来的，这样也会妨碍革命大联合。

这里我要特别提一个问题在革命大联合过程中怎么处理犯过思想错误的同志。最近毛主席批了一个文件。这个文件批了一个天津延安中学以教学班为基础实现全校大联合和关于红卫兵整顿、巩固和发展工作的体会，毛主席作了一个非常重要的批语。我想对于我们大家，有的也许听过，这里还应该念一念，毛主席是三月七日批的，是最近。

毛主席说：“此件似可转发全国，参照执行。军队应分期分批对大学、中学和小学高年级实行军训，并且参与关于开学、整顿组织、建立三结合领导机关和实行斗、批、改的工作。先作试点，取得经验，逐步推广。还要说服学生，实行马克思所说的只有解放全人类才能最后解放无产阶级自己的教导，在军训时不要排斥犯错误的教师和干部。除老年和生病的以外，要让这些人参加，以利改造。所有这些，只要认真去做，问题并不难解决。”

同志们，毛主席的指示是我们的最高指示。毛主席提到这一句话，就是要实行马克思所说的只有解放全人民才能最后解放无产阶级自己，这是第二次了。第一次就是在给清华附中红卫兵一封信中也讲到要提醒同志们，要注意无产阶级只有解放全人类才能解放自己。毛主席的这个指示不但对于我们的学校，不但对于我们的同学，对于我们的各个革命组织都必须认真地好好地学习，坚决执行。

为什么毛主席这样强调这一点呢？因为无产阶级是最后一个被剥削的阶级，无产阶级由于他的阶级地位，他决定了只有消灭世界上一切剥削阶级，只有世界上全体劳动人民、全人类获得解放，只有在全世界实现共产主义，无产阶级才能真正解放自己。所以无产阶级的世界观的它的核心正象林彪同志所说的那样是为公！为公！

我们每个革命造反派，如果是真正的无产阶级革命造反派，那么就应该照毛主席这教导行事，对于一些犯过错误的同志，我们应采取毛主席所说的“惩前毖后，治病救人”的态度。同志们，我们对于犯过路线错误的领导干部还采取这样态度，难道对革命同志就不采取这种态度了吗？当然应采取这个态度。在无产阶级文化大革命的大风大浪中，在这阶段或那阶段犯过一些错误的同志，只要改正自己的错误，只要他站到以毛主席为代表的革命路线立场上来，我们就要在毛泽东思想伟大红旗下，同他团结起来。

这里我们有一个希望。春桥同志和我们几位同志，革命委员会的同志希望上海能够在自下而上按单位、按部门、按产业这样一个大联合基础上，譬如说有可能作个设想，召开全市的工人代表大会，正式选举全市工人阶级的领导机构，无产阶级革命派工人的代表大会；譬如说有可能在全市红卫兵革命大联合基础上，召开中学、大学的红代会，来产生红卫兵的统一的机构。同志们，不久就是五一劳动节，不久就是五四青年节，我们的愿望能不能在五月一日、五月四日实现呢？希望全市的革命造反派的同志们，红卫兵同志们，大家一起来努力。这是一个希望，希望大家努力。

这里当然话说得比较全面。实现了革命大联合之后，内部还会不会有思想斗争呢？当然会有的。正象我们革命委员会成立之后，内部还会有思想斗争一样。在革命的大联合实现之后，也还是会有思想斗争的。矛盾和斗争是永远存在的，旧的矛盾解决了，新的矛盾又会产生。我们永远要站在毛主席的革命路线立场上来克服违背毛主席路线的错误思想。大联合实现之后还会有思想斗争的。但是只要我们实行了革命大联合，我们就能把无产阶级革命派的力量统一起来，我们就可以在当前的斗争中，在今后的斗、批、改中发挥更大力量。请同志们想一想。中国共产党第一次代表大会成立的时候只有十二个代表。一九二一年中国共产党第一次代表大会只有十二个代表，那也是中国马克思主义小组的大联合。这大联合中有毛主席这样的伟大领袖、伟大天才、伟大导师、伟大脱手。在革命过程中，党内有些人后来也变了。譬如说，张国焘也参加过党的第一次代表大会的，后来变成了叛徒，变成了特务。这种情况也不奇怪。大联合后还会有这样那样分化的。但是自从中国共产党成立以后，以毛主席为代表的无产阶级正确路线占了统治地位之后，中国革命就在毛主席领导下不断胜利发展，在中国共产党领导下不断胜利发展。所以我们实现革命的大联合，不要怕大联合后还有这样那样的矛盾。不奇怪。只要我们真正掌握毛主席革命路线，把大联合的队伍真正锻炼、教育成一支无产阶级队伍，真正锻炼、教育成用毛泽东思想武装起来的队伍。工人阶级的队伍、红卫兵的队伍，其它方面的队伍，都应该是这样。

实现革命的大联合才能够实现革命的“三结合”。正象黄浦区同志刚刚所说的一样，革命的“三结合”并不仅仅是一个表态，它是一个“团结——批评——团结”的过程，它是革命的领导干部和群众相结合的过程，它是工作的过程，它是革命的过程。对于广大群众来说，是以毛主席的干部政策统一认识，提高认识这样一个过程。对革命的领导干部是一个自我革命，站到毛主席革命路线一边来的自我革命的过程。

“我们的无产阶级文化大革命，是无产阶级专政下的革命。全市各单位、各区、县革命组织，都应当召开革命组织的联席会议，具体地分析本单位的各项权力究竟掌握在那个阶级手里，确定是否夺权，如何夺权或者夺权以后如何掌权，总结经验，确定自己的任务。”

根据这个决议草案，我们各单位应该自己具体分析一下，我们应该是有区别的。

在基层里一个是被一小撮走资本主义道路当权派篡夺了领导权的单位。这些单位应该坚决实现革命的“三结合”，把权力从党内一小撮走资本主义道路当权派那里坚决夺过来。

第二种情况就是已经夺了权，但是没有搞大联合，三结合。这种单位怎么办？对这些单位也要具体分析。有一些是本单位一部分革命派夺了权。他们在夺了权后就要加紧革命的大联合和三结合的工作。还有的单位是外来的单位夺了权。在这种情况下要交给本单位的革命派，外来的，是已经夺了权的可派代表，但要以本单位革命派为主。还有一种不是革命派夺权。不是革命派，是假夺权，假夺权的单位就应该不承认。至于有一些单位（少数单位）是反革命、坏人搞了夺权。他们打着夺权的幌子，篡夺了领导权，在这些单位，无产阶级革命派要组织反夺权，把权力从那里坏人手里夺回来。个别为首的坏人应该依法惩办。

第三种情况是原来权力就掌握在无产阶级革命派手里，不需要夺权的单位。这样一些单位经过革命群众分析，原来党组织继续可以领导。可以成立文化革命委员会、文化革命小组，来领导文化革命，对原党组织进行监督。

所以我们设想，关于革命委员会成立之后，怎么领导基层夺权，有这些设想。这些设想是不是对，希望大家来讨论。

同志们，当前的阶级斗争还是很尖锐的。我们一定要清醒地看到夺权之后，无产阶级和资产阶级、社会主义和资本主义两条道路的斗争还是很尖锐，还是很复杂。我们必须随时准备粉碎资产阶级反动路线的新反扑，我们必须同形形式式的资产阶级反动势力继续进行斗争。

革命的大联合万岁！
革命三结合夺权万岁！
伟大的中国共产党万岁！
我们伟大的领袖毛主席万岁！万岁！万万岁！
`
          .split('\n')
          .map(i => i.trim())
          .filter((i) => i)
          .map((i) => ({
            text: i,
            type: ContentType.paragraph,
          })),
      ],
      authors: ['姚文元'],
      dates: [
        {
          year: 1967,
          month: 3,
          day: 20
        },
      ],
      is_range_date: false,
      comments: [],
      comment_pivots: [],
      description: `
摘要红卫战报
电气革命造反组翻印
1967年3月31日
      `,
      page_start: parser_opt.page_limits[0][0],
      page_end: parser_opt.page_limits[0][1],
    },
  ];
  return res;
}