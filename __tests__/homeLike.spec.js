import React, { Component } from 'react';
import homeLike from '../app/components/Home/homeLike'
import renderer from 'react-test-renderer';


it('renders App', () => {
  const tree = renderer.create(
    <homeLike />
  ).toJSON();
  //如果快照的更新是正常的，可以添加-u 参数去删除
  expect(tree).toMatchSnapshot()
});