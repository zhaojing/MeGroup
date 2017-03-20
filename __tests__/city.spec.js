import React, { Component } from 'react';
import City from '../components/Home/CitySelect/city' 

describe('sort Data',()=>{
   test('the first data should Be a', () => {
     var netData=  [{"id":{"text":"cba"}},{"id":{"text":"cba"}},{"id":{"text":"aba"}}];
     var city = new City();
     var sortData = city.sortData(netData);
     var indexOne = Object.keys(sortData)[0]
     expect(indexOne).toBe('a');
   });

     test('the second data should Be c', () => {
     var netData=  [{"id":{"text":"cba"}},{"id":{"text":"cba"}},{"id":{"text":"aba"}}];
     var city = new City();
     var sortData = city.sortData(netData);
     var indexOne = Object.keys(sortData)[1]
     expect(indexOne).toBe('c');
   });

    test('the group number should Be 2', () => {
     var netData=  [{"id":{"text":"cba"}},{"id":{"text":"cba"}},{"id":{"text":"aba"}}];
     var city = new City();
     var sortData = city.sortData(netData);
     var sortDataLength = Object.keys(sortData).length;
     expect(sortDataLength).toBe(2);
   });
});

