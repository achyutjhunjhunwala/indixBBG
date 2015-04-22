/* global describe, it, expect, beforeEach, afterEach, module, inject, browser, element, by */
'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#/home');
    });


    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('search', function() {

    beforeEach(function() {
      browser.get('index.html#/search');
    });


    it('should render search when user navigates to /search', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

    it('should fire View2Ctrl when user navigates to /search', function() {
      expect(element.all(by.css('[ng-view] p:nth-child(2)')).first().getText()).
        toMatch(/hey this is ctrl2/);
    });
  });
});
