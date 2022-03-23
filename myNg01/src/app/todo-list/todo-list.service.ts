import {Injectable} from '@angular/core';

// 所有服务对象都是可被注入的
@Injectable({
    // 指定当前服务对象在根模块中提供 - appModule
    providedIn: 'root'
})
export class LogService {
    doLog() {
        console.log(`log: ${new Date().getTime()}`)
    }
}