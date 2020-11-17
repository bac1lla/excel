import './scss/index.scss';
import {Excel} from '@/components/excel/Excel'
import {Header} from "@/components/header/Header";
import {Tooolbar} from "@/components/toolbar/Tooolbar";
import {Formula} from "@/components/formula/Formula";
import {Table} from "@/components/table/Table";

const excel = new Excel('#app', {
  components: [Header, Tooolbar, Formula, Table]
})

excel.render();
