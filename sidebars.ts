import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'README',
    {
      type: 'category',
      label: '第一幕：异常的订单',
      collapsed: false,
      items: [
        'ch01',
        'ch02',
        'ch03',
        'ch04',
        'ch05',
        'ch06',
      ],
    },
    {
      type: 'category',
      label: '第二幕：规则的漏洞',
      collapsed: false,
      items: [
        'ch07',
        'ch08',
        'ch09',
        'ch10',
        'ch11',
        'ch12',
      ],
    },
    {
      type: 'category',
      label: '第三幕：逆流的因果',
      collapsed: false,
      items: [
        'ch13',
        'ch14',
        'ch15',
        'ch16',
        'ch17',
        'ch18',
      ],
    },
    {
      type: 'category',
      label: '第四幕：高维的崩塌',
      collapsed: false,
      items: [
        'ch19',
        'ch20',
        'ch21',
        'ch22',
        'ch23',
        'ch24',
      ],
    },
    {
      type: 'category',
      label: '第五幕：消失的终点',
      collapsed: false,
      items: [
        'ch25',
        'ch26',
        'ch27',
        'ch28',
        'ch29',
        'ch30',
      ],
    },
  ],
};

export default sidebars;
