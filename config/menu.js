import {
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const MenuItem = [
    {
        label: '대시보드',
        route: '/',
        icon: <UserOutlined/>,
    },
    {
        label: '상태체크',
        route: '/healthCheck',
        icon: <VideoCameraOutlined/>,
    }
]

export default MenuItem
