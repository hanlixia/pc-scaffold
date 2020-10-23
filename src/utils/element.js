import Vue from "vue";

/**
 * 可根据项目需要增减引入的elementUI组件
*/
import {
  Button,
  Input,
  Icon,
  Carousel,
  CarouselItem,
  Tabs,
  TabPane,
  Loading,
  Image,
  Dialog,
  Tree,
  Table,
  TableColumn,
  Pagination,
  Message,
  Row,
  Col,
  Switch,
  Card,
  Divider,
  Rate,
  Form,
  FormItem,
  Timeline,
  TimelineItem,
  Checkbox,
  Select,
  Option,
  DatePicker,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tooltip
} from "element-ui";

Vue.use(Image);
Vue.use(Button);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Dialog);
Vue.use(Tree);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Row);
Vue.use(Col);
Vue.use(Switch);
Vue.use(Card);
Vue.use(Divider)
Vue.use(Rate)
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Tooltip);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
