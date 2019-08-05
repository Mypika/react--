
import pagesindex from '../../HomePage/pages/pagesindex'
import Mangenr from '../../HomePage/pages/Mangenr'
import locaupload from '../../HomePage/pages/locaupload'
import crawler from '../../HomePage/pages/crawler'
import Gall from '../../HomePage/Gbook/Gall'
import Ghot from '../../HomePage/Gbook/Ghot'

const Mroute = [
    {
        name:'首页',
        paths:'',
        child:false,
        commpoent:pagesindex,
        id:1,
    },
    {
        name:'书籍管理',
        paths:'/ify',
        child:false,
        commpoent:Mangenr,
        id:2,
    },
    {
        name:'本地上传',
        paths:'/loac',
        child:false,
        commpoent:locaupload,
        id:3,
    },
    {
        name:'网络抓取',
        paths:'/crawler',
        child:false,
        commpoent:crawler,
        id:4,
    },
    {
        name:'追书神器接口',
        paths:'/GGbook',
        child:true,
        id:5,
        children:[
            {
                name:'全部分类',
                paths:'/GGbook/ify',
                child:false,
                commpoent:Gall,
                id:6,
            },
            {
                name:'人气最高',
                paths:'/GGbook/poel',
                child:false,
                commpoent:Ghot,
                id:7,
            }
        ]
    },
]
export default Mroute