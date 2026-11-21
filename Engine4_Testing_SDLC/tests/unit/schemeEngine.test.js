// Engine 4's test copy imports Engine 2's functions; tests run with node:test.
import test from 'node:test';
import assert from 'node:assert/strict';
import { searchSchemes, filterSchemesByCategory, validateFarmerInquiry } from '../../../Engine2_Logic_DSA/src/schemeEngine.js';
const sample = [{id:'a', title:'PM Kisan', category:'Support'}, {id:'b', title:'Solar Pump', category:'Energy'}];
test('search finds a title match', () => assert.equal(searchSchemes(sample,'kisan').length,1));
test('category filter narrows results', () => assert.equal(filterSchemesByCategory(sample,'Energy').length,1));
test('valid inquiry payload accepted', () => assert.equal(validateFarmerInquiry({name:'Farmer',email:'farmer@example.com',phone:'9876543210',topic:'Schemes',message:'Help'}).valid,true));
test('missing fields rejected', () => assert.equal(validateFarmerInquiry({}).valid,false));
