
import { observable, action } from "mobx";
export default class TestStore {
    @observable data;
    constructor() {
        this.data = [];
    }
    @action changeData(res) {
        this.data = res;
    }
}