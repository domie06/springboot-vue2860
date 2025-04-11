const base = {
    get() {
        return {
            url : "http://localhost:8080/sucaiwangzhan/",
            name: "sucaiwangzhan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/sucaiwangzhan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "素材网"
        } 
    }
}
export default base
