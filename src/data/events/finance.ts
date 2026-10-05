import type { GameEvent } from '../../types'

export const financeEvents: GameEvent[] = [
  {
    id: 'finance-2010-worldcup',
    category: 'finance',
    rarity: 'rare',
    year: 2010,
    requires: { minAge: 4 },
    title: '2010 年世界杯',
    text: '夏天，爸爸和叔叔们围着电视，边看球边打赌：谁是冠军？你记得，冠军是……',
    realFact: '2010 年南非世界杯冠军为西班牙，决赛 1:0 胜荷兰，加时赛第 116 分钟西班牙中场破门制胜。',
    choices: [
      {
        text: '大声说“西班牙！”',
        usesMemory: true,
        stake: { max: 2 },
        outcomes: [
          {
            tag: 'success',
            text: '爸爸笑着押了一注西班牙，结果赢了。他看你的眼神开始不太一样了。',
            effects: { ret: 1, stats: { influence: 2 }, addFlags: ['parents-trust'] },
          },
          { tag: 'misremember', text: '你记混了，喊成了荷兰。爸爸听了你的，押上的钱输了。', effects: { ret: -1, stats: { happiness: -3 } } },
        ],
      },
      { text: '假装什么都不知道，安静看球', outcomes: [{ text: '你平静地看完了一场世界杯。', effects: { stats: { happiness: 2 } } }] },
    ],
  },
  {
    id: 'finance-2017-crypto',
    dependsOn: ['y1115-2013-bitcoin'],
    category: 'finance',
    rarity: 'rare',
    year: 2017,
    requires: { minAge: 16 },
    title: '一种叫比特币的东西',
    text: '你在宿舍里听到有人聊起一种叫“比特币”的东西。你知道它未来会涨成什么样。可你只是个学生，手上能动用的钱并不多。',
    variants: [{ requires: { notFlags: ['y1620-in-college'] }, text: '身边越来越多的人聊起一种叫“比特币”的东西。你知道它未来会涨成什么样，也知道今年年底会有一个疯狂的顶。' }],
    realFact: '2017 年比特币从年初约 1000 美元涨到年底接近 20000 美元，之后大幅回落。',
    choices: [
      {
        text: '说服父母拿出积蓄投资',
        requires: { flags: ['family-has-money'] },
        usesMemory: true,
        stake: { max: 300 },
        outcomes: [
          { tag: 'success', text: '父母半信半疑地在年中投了一笔。你默默看着价格一路向上，在高点前把仓位撤回来了。', effects: { ret: 4, stats: { influence: 3 } } },
          { tag: 'misremember', text: '你记错了时间点，买在了接近两万美元的高位，接下来是漫长的被套。', effects: { stats: { happiness: -8 }, buy: { asset: 'btc', at: 19000 } } },
        ],
      },
      {
        text: '拿点闲钱买一点点',
        stake: { max: 0.5 },
        outcomes: [
          { text: '你买了一点点，钱不多，很快也就忘了这件事。', effects: { stats: { happiness: 1 }, buy: { asset: 'btc', at: 5000 } } },
        ],
      },
      { text: '算了，先好好学习', outcomes: [{ text: '你把心思放回书本上。', effects: { stats: { intelligence: 4 } } }] },
    ],
  },
  {
    id: 'finance-2022-worldcup',
    category: 'finance',
    rarity: 'legendary',
    year: 2022,
    requires: { minAge: 20 },
    title: '2022 年世界杯',
    text: '卡塔尔世界杯开赛。你已经攒了一笔钱，你清楚地记得决赛的比分：阿根廷对法国，3:3，点球大战。你要押多少？',
    realFact: '2022 年卡塔尔世界杯决赛，阿根廷与法国常规与加时 3:3，点球大战 4:2 阿根廷夺冠。',
    choices: [
      {
        text: '押阿根廷夺冠',
        usesMemory: true,
        stake: { max: 500 },
        outcomes: [
          { tag: 'success', text: '点球踢进的那一刻你整个人都在抖，这一注的赔率让你一夜暴富。', effects: { ret: 4, stats: { fame: 5, happiness: 10 } } },
          { tag: 'misremember', text: '你把记忆里的另一场比赛弄混了，押错了队，血本无归。', effects: { ret: -1, stats: { happiness: -15 } } },
        ],
      },
      {
        text: '小注怡情',
        stake: { max: 2 },
        outcomes: [
          { text: '你随手押了几场，小赚一笔，请朋友们吃了顿火锅。', effects: { ret: 1, stats: { happiness: 5 } } },
          { text: '你押的几场全都爆了冷，就当交了观赛门票。', effects: { ret: -1, stats: { happiness: -1 } } },
        ],
      },
      { text: '不碰赌博', outcomes: [{ text: '你安静看球，只是为那位阿根廷十号落了一次泪。', effects: { stats: { happiness: 3 } } }] },
    ],
  },
]
