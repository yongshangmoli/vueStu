
let _ = require('underscore');

var HTTP_VERBS = [
    'all',
    'get',
    'post',
    'put',
    'head',
    'delete',
    'options',
    'trace',
    'copy',
    'lock',
    'mkcol',
    'move',
    'purge',
    'propfind',
    'proppatch',
    'unlock',
    'report',
    'mkactivity',
    'checkout',
    'merge',
    'm-search',
    'notify',
    'subscribe',
    'unsubscribe',
    'patch',
    'search',
    'connect'
];

var Utils = {
    checkMethod: function (method) {
        var defaultMethod = 'get';
        if (typeof method == 'undefined') {
            return defaultMethod;
        }
        if (!~HTTP_VERBS.indexOf(method)) {
            return defaultMethod;
        } else {
            return method;
        }
    },
    concatUrl: function (...urls) {
        var urlPart = [];
        for (let url of urls) {
            url = url.replace(/(^\/+)|(\/+$)/g, '');
            if (url) {
                urlPart.push(url);
            }
        }
        return '/' + urlPart.join('/');
    },
    // checkRateLimiter: function (router, options) {
    //     // let limiter = this.createRateLimiter(router);
    //     if (!limiter) {
    //         return null;
    //     }
    //     let raterLimiter = (config) => {
    //         return limiter({
    //             method: 'all',
    //             lookup: ['sessionID'],
    //             total: config.total,
    //             expire: config.expire,
    //             onRateLimited: (req, res) => {
    //                 res.status(429);
    //                 res.error(config.tips || 'REQUEST_RATE_LIMITED');
    //             }
    //         });
    //     }
    //     if (options.rateLimit) {
    //         let rateLimit = _.pick(options.rateLimit, 'total', 'expire', 'enable');
    //         if (rateLimit.enable && rateLimit.total && rateLimit.expire) {
    //             return raterLimiter(rateLimit);
    //         }
    //     }
    //     return null;
    // },
    mergeCallback: function (handlers, ...middlewares) {
        let callbacks = [];
        for (let item of middlewares) {
            if (typeof item === 'function') {
                callbacks.push(item);
            }
        }
        if (Array.isArray(handlers)) {
            callbacks = callbacks.concat(handlers);
        } else if (typeof handlers === 'function') {
            callbacks.push(handlers);
        }
        return callbacks;
    },
    // createRateLimiter: function (router) {
    //     if (typeof this.limiter !== 'undefined') { // 定义过
    //         return this.limiter;
    //     }
    //     let env = process.env.NODE_ENV;
    //     let Cache = require('../service/cache');
    //     let configManager = require('../config/config_manager');
    //     let envConfig = configManager.getConfig('config')(env);
    //     if (!envConfig.rateLimit || !envConfig.rateLimit.enable) {
    //         this.limiter = null;
    //         return this.limiter;
    //     }
    //     let cacheClient = Cache(_.extend({}, envConfig.cache, _.pick(envConfig, 'logPath', 'remoteLog')));
    //     this.limiter = require('express-limiter')(router, cacheClient);
    //     return this.limiter;
    // },
    generateRoute: function (router, routeMaps, prefix) {
        prefix = prefix || '';
        routeMaps.forEach(function (item) {
            var url = this.concatUrl(prefix, item.urlReg);
            if (typeof item.callback == 'function' || (item.callback && item.callback.length)) {
                var method = this.checkMethod(item.method);
                // var rateLimiter = this.checkRateLimiter(router, item.options);
                router[method](url, this.mergeCallback(item.callback));
            }
            if (Array.isArray(item.children) && item.children.length) {
                this.generateRoute(router, item.children, url);
            }
        }, this);
        return router;
    },

    /**
     * router 快捷方式
     * reg        路径，对应req.path
     * children   自路由，同样的结构
     * callback   路由中间件，支持函数类型或数组
     * options    其他选项，目前仅支持rateLimit(接口请求频率限制)
     *      rateLimit.enable   是否启用
     *      rateLimit.total    总次数
     *      rateLimit.expire   时间范围，单位ms
     */
    route: function (reg, method, children, callback, options={}) {
        return {
            urlReg: reg || '',
            method: method || 'get',
            children: children || [],
            callback: callback || [],
            options: options || {}
        };
    },

};

module.exports = Utils;