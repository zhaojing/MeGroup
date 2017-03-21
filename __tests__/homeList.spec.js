import React, { Component } from 'react';
import HomeList from '../app/components/Home/homeList'
import renderer from 'react-test-renderer';



describe('HomeList Render', () => {
    const fetch = global.fetch;

    beforeEach(() => {
        global.fetch = jest.fn().mockImplementation(() => {
            var returnData = new Promise((resolve, reject) => {
                resolve({
                    ok: true,
                    json: function () {
                        return { "data": [{ "imgurl": "http://p1.meituan.net/w.h/deal", "mname": "第一佳大鸡排", "mtitle": "鸡排+伴侣，建议单人使用", "price": 11.8 }]}
                    }
                });
            });
            return returnData;
        });
    });

    it('renders HomeList', () => {
        const tree = renderer.create(
            <HomeList />
        ).toJSON();
        //如果快照的更新是正常的，可以添加-u 参数去删除
        expect(tree).toMatchSnapshot();
    });

    afterEach(() => {
        global.fetch = fetch;
    });
});