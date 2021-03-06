interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'عتاد'
    }
  },
  {
    title: true,
    name: 'عتاد'
  },
  {
    name: 'عتاد إعلامية',
    url: '/informatiques',
    icon: 'icon-puzzle',
    divider: false,
    badge: {
      variant: 'info',
      text: 'NEW'
    },
    children: [
      {
        name: 'قائمة شاملة',
        url: '/informatiques/listmateriels',
        icon: 'icon-puzzle',
        class:'small'

      },
      {
        name: ' قائمة شاملة حسب التقرير الشهري',
        url: '/informatiques/listglobal',
        icon: 'icon-puzzle',
        class:'small'
      },
      {
        name: 'عتاد الإعلامية حسب الهياكل',
        url: '/informatiques/listparservice',
        icon: 'icon-puzzle',
        class:'small'
      }
    ]
  },
  {
    name: 'عتاد إشارة',
    url: '/informatiques',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'قائمة شاملة',
        url: '/informatiques/listmateriels',
        icon: 'icon-puzzle'
      },
      {
        name: 'إضافة عتاد',
        url: '/informatiques/addmateriel',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    title: true,
    name: 'منظومات جيش الطيران'
  },
  {
  name: 'المنظومات',
    url: '/applications',
    icon: 'icon-drop',
    children: [
      {
        name: 'قائمة شاملة',
        url: '/applications/listapplications',
        icon: 'icon-puzzle'
      },      
      {
        name: 'إضافة منظومة',
        url: '/applications/addapplication',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    title: true,
    name: 'القاعدة الجوية'
  },
  {
  name: 'الوحدات والمصالح',
    url: '/services',
    icon: 'icon-drop',
    children: [
      {
        name: 'قائمة شاملة',
        url: '/services/listservices',
        icon: 'icon-puzzle'
      },
      {
        name: 'إضافة مصالح أو وحدات',
        url: '/services/addservice',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'الأفراد',
      url: '/owners',
      icon: 'cui-user icons',
      children: [
        {
          name: 'قائمة شاملة',
          url: '/owners/',
          icon: 'icon-puzzle'
        },
        {
          name: 'الأفراد حسب الوحدة',
          url: '/owners/listownersByservice',
          icon: 'icon-puzzle'
        },
        {
          name: 'إضافة أفراد',
          url: '/owners/addowner',
          icon: 'icon-puzzle'
        },
      ]
    },
    {
      title: true,
      name: 'مستهلكات'
    },
    {
    name: 'مستهلكات إعلامية',
      url: '/consinfo',
      icon: 'icon-drop',
      children: [
        {
          name: 'قائمة شاملة',
          url: '/consinfo/listcons',
          icon: 'icon-puzzle'
        },
        {
          name: 'إضافة مستهلكات',
          url: '/consinfo/addcons',
          icon: 'icon-puzzle'
        },
      ]
    },
    {
      name: 'مستهلكات إشارة',
        url: '/constrans',
        icon: 'icon-drop',
        children: [
          {
            name: 'قائمة شاملة',
            url: '/constrans/listcons',
            icon: 'icon-puzzle'
          },
          {
            name: 'إضافة مصالح أو وحدات',
            url: '/services/addservice',
            icon: 'icon-puzzle'
          },
        ]
      },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'base',
    url: '/bases',
    icon: 'icon-puzzle',
    children: [

      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Loading Buttons',
        url: '/buttons/loading-buttons',
        icon: 'icon-cursor',
        badge: {
          variant: 'danger',
          text: 'PRO'
        }
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Editors',
    url: '/editors',
    icon: 'fa fa-code',
    children: [
      {
        name: 'Text Editors',
        url: '/editors/text-editors',
        icon: 'icon-note',
        badge: {
          variant: 'danger',
          text: 'PRO'
        }
      },
      {
        name: 'Code Editors',
        url: '/editors/code-editors',
        icon: 'fa fa-code',
        badge: {
          variant: 'danger',
          text: 'PRO'
        }
      }
    ]
  },
  {
    name: 'Forms',
    url: '/forms',
    icon: 'icon-note',
    children: [
      {
        name: 'Basic Forms',
        url: '/forms/basic-forms',
        icon: 'icon-note'
      },
      {
        name: 'Advanced',
        url: '/forms/advanced-forms',
        icon: 'icon-note',
        badge: {
          variant: 'danger',
          text: 'PRO'
        }
      },
      {
        name: 'Validation',
        url: '/forms/validation-forms',
        icon: 'icon-note',
        badge: {
          variant: 'danger',
          text: 'PRO'
        }
      },
    ]
  },
  {
    name: 'Google Maps',
    url: '/google-maps',
    icon: 'icon-map',
    badge: {
      variant: 'danger',
      text: 'PRO'
    }
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      },
      {
        name: 'Toastr',
        url: '/notifications/toastr',
        icon: 'icon-bell',
        badge: {
          variant: 'danger',
          text: 'PRO'
        }
      }
    ]
  },
  {
    name: 'Plugins',
    url: '/plugins',
    icon: 'icon-energy',
    children: [
      {
        name: 'Calendar',
        url: '/plugins/calendar',
        icon: 'icon-calendar',
        badge: {
          variant: 'danger',
          text: 'PRO'
        }
      },
      {
        name: 'Draggable',
        url: '/plugins/draggable-cards',
        icon: 'icon-cursor-move',
        badge: {
          variant: 'danger',
          text: 'PRO'
        }
      },
      {
        name: 'Spinners',
        url: '/plugins/spinners',
        icon: 'fa fa-spinner',
        badge: {
          variant: 'danger',
          text: 'PRO'
        }
      }
    ]
  },
  {
    name: 'Tables',
    url: '/tables',
    icon: 'icon-list',
    children: [
      {
        name: 'DataTable',
        url: '/tables/datatable',
        icon: 'icon-list',
        badge: {
          variant: 'danger',
          text: 'PRO'
        }
      },
      {
        name: 'Standard Tables',
        url: '/tables/tables',
        icon: 'icon-list'
      },
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: {disabled: true},
  },
  {
    name: 'Apps',
    url: '/apps',
    icon: 'icon-layers',
    children: [
      {
        name: 'Invoicing',
        url: '/apps/invoicing',
        icon: 'icon-speech',
        children: [
          {
            name: 'Invoice',
            url: '/apps/invoicing/invoice',
            icon: 'icon-speech',
            badge: {
              variant: 'danger',
              text: 'PRO'
            }
          }
        ]
      },
      {
        name: 'Email',
        url: '/apps/email',
        icon: 'icon-speech',
        children: [
          {
            name: 'Inbox',
            url: '/apps/email/inbox',
            icon: 'icon-speech',
            badge: {
              variant: 'danger',
              text: 'PRO'
            }
          },
          {
            name: 'Message',
            url: '/apps/email/message',
            icon: 'icon-speech',
            badge: {
              variant: 'danger',
              text: 'PRO'
            }
          },
          {
            name: 'Compose',
            url: '/apps/email/compose',
            icon: 'icon-speech',
            badge: {
              variant: 'danger',
              text: 'PRO'
            }
          }
        ]
      }
    ]
  }
];
