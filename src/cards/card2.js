import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import './tilt.css';

const Tilt = ({ children }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const node = tiltRef.current;
    const settings = {
      maxTilt: 20,
      perspective: 1000,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
      speed: 1200,
      glare: false,
      reset: true
    };

    const glare = $(`<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>`);
    node.appendChild(glare[0]);

    const requestTick = function() {
      if (this.ticking) return;
      requestAnimationFrame(updateTransforms.bind(this));
      this.ticking = true;
    };

    const bindEvents = function() {
      const _this = this;
      $(this).on('mousemove', mouseMove);
      $(this).on('mouseenter', mouseEnter);
      if (this.settings.reset) $(this).on('mouseleave', mouseLeave);
      if (this.settings.glare) $(window).on('resize', updateGlareSize.bind(_this));
    };

    const setTransition = function() {
      if (this.timeout !== undefined) clearTimeout(this.timeout);
      $(this).css({ 'transition': `${this.settings.speed}ms ${this.settings.easing}` });
      if(this.settings.glare) this.glareElement.css({'transition': `opacity ${this.settings.speed}ms ${this.settings.easing}`});
      this.timeout = setTimeout(() => {
        $(this).css({'transition': ''});
        if(this.settings.glare) this.glareElement.css({'transition': ''});
      }, this.settings.speed);
    };

    const mouseEnter = function(event) {
      this.ticking = false;
      $(this).css({'will-change': 'transform'});
      setTransition.call(this);
      $(this).trigger("tilt.mouseEnter");
    };

    const getMousePositions = function(event) {
      if (typeof(event) === "undefined") {
        event = {
          pageX: $(this).offset().left + $(this).outerWidth() / 2,
          pageY: $(this).offset().top + $(this).outerHeight() / 2
        };
      }
      return {x: event.pageX, y: event.pageY};
    };

    const mouseMove = function(event) {
      this.mousePositions = getMousePositions(event);
      requestTick.call(this);
    };

    const mouseLeave = function() {
      setTransition.call(this);
      this.reset = true;
      requestTick.call(this);
      $(this).trigger("tilt.mouseLeave");
    };

    const getValues = function() {
      const width = $(this).outerWidth();
      const height = $(this).outerHeight();
      const left = $(this).offset().left;
      const top = $(this).offset().top;
      const percentageX = (this.mousePositions.x - left) / width;
      const percentageY = (this.mousePositions.y - top) / height;
      const tiltX = ((this.settings.maxTilt / 2) - ((percentageX) * this.settings.maxTilt)).toFixed(2);
      const tiltY = (((percentageY) * this.settings.maxTilt) - (this.settings.maxTilt / 2)).toFixed(2);
      const angle = Math.atan2(this.mousePositions.x - (left+width/2),- (this
