import Drawer from '../src/index';
import Menu from '../../menu/index';
import Icon from '../../icon/index';
import '../assets/index.less';
import '../../menu/style/index';
import '../../icon/style/index';

var SubMenu = Menu.SubMenu;
var MenuItemGroup = Menu.ItemGroup;

export default {
  data: function data() {
    return {
      open: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      setTimeout(function () {
        _this.open = false;
      }, 2000);
    });
  },

  methods: {
    onChange: function onChange(bool) {
      console.log(bool);
    },
    onTouchEnd: function onTouchEnd() {
      this.open = false;
    },
    onSwitch: function onSwitch() {
      this.open = !this.open;
    }
  },
  render: function render() {
    var h = arguments[0];

    return h('div', [h(
      Drawer,
      {
        on: {
          'change': this.onChange,
          'maskClick': this.onTouchEnd
        },
        attrs: {
          open: this.open,

          handler: false,
          level: null,
          width: '20vw'
        }
      },
      [h(
        Menu,
        {
          attrs: { defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'], mode: 'inline' }
        },
        [h(
          SubMenu,
          {
            key: 'sub1',
            attrs: { title: h('span', [h(Icon, {
                attrs: { type: 'mail' }
              }), h('span', ['Navigation One'])])
            }
          },
          [h(
            MenuItemGroup,
            { key: 'g1', attrs: { title: 'Item 1' }
            },
            [h(
              Menu.Item,
              { key: '1' },
              ['Option 1']
            ), h(
              Menu.Item,
              { key: '2' },
              ['Option 2']
            )]
          ), h(
            MenuItemGroup,
            { key: 'g2', attrs: { title: 'Item 2' }
            },
            [h(
              Menu.Item,
              { key: '3' },
              ['Option 3']
            ), h(
              Menu.Item,
              { key: '4' },
              ['Option 4']
            )]
          )]
        ), h(
          SubMenu,
          {
            key: 'sub2',
            attrs: { title: h('span', [h(Icon, {
                attrs: { type: 'appstore' }
              }), h('span', ['Navigation Two'])])
            }
          },
          [h(
            Menu.Item,
            { key: '5' },
            ['Option 5']
          ), h(
            Menu.Item,
            { key: '6' },
            ['Option 6']
          ), h(
            SubMenu,
            { key: 'sub3', attrs: { title: 'Submenu' }
            },
            [h(
              Menu.Item,
              { key: '7' },
              ['Option 7']
            ), h(
              Menu.Item,
              { key: '8' },
              ['Option 8']
            )]
          )]
        ), h(
          SubMenu,
          {
            key: 'sub4',
            attrs: { title: h('span', [h(Icon, {
                attrs: { type: 'setting' }
              }), h('span', ['Navigation Three'])])
            }
          },
          [h(
            Menu.Item,
            { key: '9' },
            ['Option 9']
          ), h(
            Menu.Item,
            { key: '10' },
            ['Option 10']
          ), h(
            Menu.Item,
            { key: '11' },
            ['Option 11']
          ), h(
            Menu.Item,
            { key: '12' },
            ['Option 12']
          )]
        )]
      )]
    ), h(
      'div',
      {
        style: {
          width: '100%',
          height: 667,
          background: '#fff000',
          color: '#fff',
          textAlign: 'center',
          lineHeight: '667px'
        }
      },
      ['\u5185\u5BB9\u533A\u5757', h(
        'button',
        {
          on: {
            'click': this.onSwitch
          },

          style: { height: 24, width: 100, marginLeft: 20, color: '#000', lineHeight: '24px' }
        },
        [!this.open ? '打开' : '关闭']
      )]
    )]);
  }
};