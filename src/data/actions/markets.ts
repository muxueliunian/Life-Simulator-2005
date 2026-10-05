import type { GameAction } from '../../types'

/**
 * 行动：自己买卖 A 股、比特币（价格见 src/data/markets.ts）。
 * 年中按“当年年初价”成交，之后每年年底按真实价格重估：靠的是你记得的历史，不掷骰子。
 * 未成年时钱在爸妈手里，只能说动他们拿出一部分（见 engine.stakeRange）。
 */
export const marketActions: GameAction[] = [
  {
    id: 'act-ashare-buy', group: 'money', text: '买入 A 股', hint: '按年初价买入指数，此后每年随真实行情涨跌',
    requires: { minAge: 7, minYear: 2001 },
    stake: { max: 2000 },
    outcomes: [
      { requires: { maxAge: 17 }, text: '你缠着爸妈去证券营业部开了户。爸爸嘀咕“小孩子懂什么”，还是照你说的买了。', effects: { buy: { asset: 'ashare' } } },
      { requires: { minAge: 18 }, text: '你买入了一篮子 A 股指数，打算让时间替你干活。', effects: { buy: { asset: 'ashare' } } },
    ],
  },
  {
    id: 'act-ashare-sell', group: 'money', text: '卖出 A 股持仓', hint: '按年初价全部卖出，落袋为安',
    requires: { holding: ['ashare'] },
    outcomes: [{ text: '你把 A 股持仓全部卖了，账户里只剩现金。', effects: { sell: { asset: 'ashare' } } }],
  },
  {
    id: 'act-btc-buy', group: 'money', text: '买入比特币', hint: '按年初价买入，涨跌都很猛',
    requires: { minAge: 16, minYear: 2014 },
    stake: { max: 1000 },
    outcomes: [
      { requires: { maxAge: 17 }, text: '你把这串字符的买法讲了三遍，爸妈半信半疑地照做了，还逼你保证“不许跟同学说”。', effects: { buy: { asset: 'btc' } } },
      { requires: { minAge: 18 }, text: '你买入了一笔比特币，把私钥抄在纸上锁进了抽屉。', effects: { buy: { asset: 'btc' } } },
    ],
  },
  {
    id: 'act-btc-sell', group: 'money', text: '卖出比特币', hint: '按年初价全部卖出',
    requires: { holding: ['btc'] },
    outcomes: [{ text: '你把手里的比特币全部卖掉，换回了现金。', effects: { sell: { asset: 'btc' } } }],
  },
]
