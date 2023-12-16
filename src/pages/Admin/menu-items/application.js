// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconApps, IconUserCheck, IconBasket, IconMessages, IconLayoutKanban, IconMail, IconCalendar, IconNfc } from '@tabler/icons';

// constant
const icons = {
    IconApps,
    IconUserCheck,
    IconBasket,
    IconMessages,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
    id: 'application',
    title: <FormattedMessage id="application" />,
    icon: icons.IconApps,
    type: 'group',
    children: [
        {
            id: 'users',
            title: <FormattedMessage id="users" />,
            type: 'collapse',
            icon: icons.IconUserCheck,
            children: [
                {
                    id: 'mentors',
                    title: <FormattedMessage id="Mentors" />,
                    type: 'item',
                    url: '/users/mentors',
                },
                {
                    id: 'mentors',
                    title: <FormattedMessage id="Students" />,
                    type: 'item',
                    url: '/users/students',
                },
                // {
                //     id: 'account-profile',
                //     title: <FormattedMessage id="account-profile" />,
                //     type: 'collapse',
                //     children: [
                //         {
                //             id: 'profile1',
                //             title: (
                //                 <>
                //                     <FormattedMessage id="profile" /> 01
                //                 </>
                //             ),
                //             type: 'item',
                //             // url: '/user/account-profile/profile1'
                //             url: '/admin'
                //         },
                //         {
                //             id: 'profile2',
                //             title: (
                //                 <>
                //                     <FormattedMessage id="profile" /> 02
                //                 </>
                //             ),
                //             type: 'item',
                //             // url: '/user/account-profile/profile2'
                //             url: '/admin'
                //         },
                //         {
                //             id: 'profile3',
                //             title: (
                //                 <>
                //                     <FormattedMessage id="profile" /> 03
                //                 </>
                //             ),
                //             type: 'item',
                //             // url: '/user/account-profile/profile3'
                //             url: '/admin'
                //         }
                //     ]
                // },
                // {
                //     id: 'user-card',
                //     title: <FormattedMessage id="cards" />,
                //     type: 'collapse',
                //     children: [
                //         {
                //             id: 'card1',
                //             title: (
                //                 <>
                //                     <FormattedMessage id="style" /> 01
                //                 </>
                //             ),
                //             type: 'item',
                //             // url: '/user/card/card1'
                //             url: '/admin'
                //         },
                //         {
                //             id: 'card2',
                //             title: (
                //                 <>
                //                     <FormattedMessage id="style" /> 02
                //                 </>
                //             ),
                //             type: 'item',
                //             // url: '/user/card/card2'
                //             url: '/admin'
                //         },
                //         {
                //             id: 'card3',
                //             title: (
                //                 <>
                //                     <FormattedMessage id="style" /> 03
                //                 </>
                //             ),
                //             type: 'item',
                //             // url: '/user/card/card3'
                //             url: '/admin'
                //         }
                //     ]
                // },
                // {
                //     id: 'user-list',
                //     title: <FormattedMessage id="list" />,
                //     type: 'collapse',
                //     children: [
                //         {
                //             id: 'list1',
                //             title: (
                //                 <>
                //                     <FormattedMessage id="style" /> 01
                //                 </>
                //             ),
                //             type: 'item',
                //             // url: '/user/list/list1'
                //             url: '/admin'
                //         },
                //         {
                //             id: 'list2',
                //             title: (
                //                 <>
                //                     <FormattedMessage id="style" /> 02
                //                 </>
                //             ),
                //             type: 'item',
                //             // url: '/user/list/list2'
                //             url: '/admin'
                //         }
                //     ]
                // }
            ]
        },
        // {
        //     id: 'customer',
        //     title: <FormattedMessage id="customer" />,
        //     type: 'collapse',
        //     icon: icons.IconBasket,
        //     children: [
        //         {
        //             id: 'customer-list',
        //             title: <FormattedMessage id="customer-list" />,
        //             type: 'item',
        //             // url: '/customer/customer-list',
        //             url: '/admin',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'order-list',
        //             title: <FormattedMessage id="order-list" />,
        //             type: 'item',
        //             // url: '/customer/order-list',
        //             url: '/admin',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'create-invoice',
        //             title: <FormattedMessage id="create-invoice" />,
        //             type: 'item',
        //             // url: '/customer/create-invoice',
        //             url: '/admin',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'order-details',
        //             title: <FormattedMessage id="order-details" />,
        //             type: 'item',
        //             // url: '/customer/order-details'
        //             url: '/admin',
        //         },
        //         {
        //             id: 'product',
        //             title: <FormattedMessage id="product" />,
        //             type: 'item',
        //             // url: '/customer/product',
        //             url: '/admin',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'product-review',
        //             title: <FormattedMessage id="product-review" />,
        //             type: 'item',
        //             // url: '/customer/product-review',
        //             url: '/admin',
        //             breadcrumbs: false
        //         }
        //     ]
        // },
        // {
        //     id: 'chat',
        //     title: <FormattedMessage id="chat" />,
        //     type: 'item',
        //     icon: icons.IconMessages,
        //     // url: '/app/chat'
        //     url: '/admin',
        // },
        // {
        //     id: 'kanban',
        //     title: 'Kanban',
        //     type: 'item',
        //     icon: icons.IconLayoutKanban,
        //     // url: '/app/kanban/board'
        //     url: '/admin',
        // },
        // {
        //     id: 'mail',
        //     title: <FormattedMessage id="mail" />,
        //     type: 'item',
        //     icon: icons.IconMail,
        //     // url: '/app/mail'
        //     url: '/admin',
        // },
        // {
        //     id: 'calendar',
        //     title: <FormattedMessage id="calendar" />,
        //     type: 'item',
        //     // url: '/app/calendar',
        //     url: '/admin',
        //     icon: icons.IconCalendar,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'contact',
        //     title: <FormattedMessage id="contact" />,
        //     type: 'collapse',
        //     icon: icons.IconNfc,
        //     children: [
        //         {
        //             id: 'c-card',
        //             title: <FormattedMessage id="cards" />,
        //             type: 'item',
        //             // url: '/app/contact/c-card',
        //             url: '/admin',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'c-list',
        //             title: <FormattedMessage id="list" />,
        //             type: 'item',
        //             // url: '/app/contact/c-list',
        //             url: '/admin',
        //             breadcrumbs: false
        //         }
        //     ]
        // },
        // {
        //     id: 'e-commerce',
        //     title: <FormattedMessage id="e-commerce" />,
        //     type: 'collapse',
        //     icon: icons.IconBasket,
        //     children: [
        //         {
        //             id: 'products',
        //             title: <FormattedMessage id="products" />,
        //             type: 'item',
        //             // url: '/e-commerce/products'
        //             url: '/admin',
        //         },
        //         {
        //             id: 'product-details',
        //             title: <FormattedMessage id="product-details" />,
        //             type: 'item',
        //             // url: '/e-commerce/product-details/1',
        //             url: '/admin',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'product-list',
        //             title: <FormattedMessage id="product-list" />,
        //             type: 'item',
        //             // url: '/e-commerce/product-list',
        //             url: '/admin',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'checkout',
        //             title: <FormattedMessage id="checkout" />,
        //             type: 'item',
        //             // url: '/e-commerce/checkout'
        //             url: '/admin',
        //         }
        //     ]
        // }
    ]
};

export default application;
