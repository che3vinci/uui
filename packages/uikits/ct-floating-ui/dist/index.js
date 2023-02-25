(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@c3/react'), require('@c3/utils'), require('@floating-ui/react-dom-interactions'), require(' @c3/dbg?commonjs-require'), require(' @c3/dbg?commonjs-proxy'), require('animejs'), require(' @c3/utils?commonjs-require'), require(' @c3/utils?commonjs-proxy'), require('react'), require('react/jsx-runtime')) :
	typeof define === 'function' && define.amd ? define(['exports', '@c3/react', '@c3/utils', '@floating-ui/react-dom-interactions', ' @c3/dbg?commonjs-require', ' @c3/dbg?commonjs-proxy', 'animejs', ' @c3/utils?commonjs-require', ' @c3/utils?commonjs-proxy', 'react', 'react/jsx-runtime'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.root = {}, global.react, global.utils, global.reactDomInteractions, null, global.require$$0, global.require$$1, null, global.require$$2, global.React, global.jsxRuntime));
})(this, (function (exports, react, utils, reactDomInteractions, dbg_commonjsRequire, require$$0, require$$1, utils_commonjsRequire, require$$2, React, jsxRuntime) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
	var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
	var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var dist$1 = {exports: {}};

	(function (module, exports) {
	  (function (global, factory) {
	    factory(exports, require$$0__default["default"], require$$1__default["default"], require$$2__default["default"]) ;
	  })(commonjsGlobal, function (exports, dbg, _anime, utils) {

	    function _interopDefaultLegacy(e) {
	      return e && typeof e === 'object' && 'default' in e ? e : {
	        'default': e
	      };
	    }
	    var _anime__default = /*#__PURE__*/_interopDefaultLegacy(_anime);

	    //@ts-ignore
	    window.__anime = _anime__default["default"];
	    const animate = (...animeParams) => {
	      const instances = [];
	      for (const param of animeParams) {
	        instances.push(_anime__default["default"]({
	          update: ins => {
	            dbg.dbg("progress", ins.progress, ins.animations.map(a => `target:${a.animatable.target.tagName}, ${a.property}:${a.currentValue}`));
	          },
	          ...param
	        }));
	      }
	      return instances.length === 1 ? instances[0] : instances;
	    };
	    const useAnime = () => animate;
	    const fades = {
	      in: params => {
	        animate({
	          opacity: [0, 1],
	          ...params
	        });
	      },
	      out: params => {
	        animate({
	          opacity: [1, 0],
	          ...params
	        });
	      }
	    };
	    const getScaleKey = placement => {
	      switch (placement) {
	        case "top":
	        case "bottom":
	          return "scaleY";
	        case "left":
	        case "right":
	          return "scaleX";
	        default:
	          throw new Error("not existed");
	      }
	    };

	    //TODO: zoom type optimization
	    const slides = utils.placements.reduce((acc, cur) => {
	      return {
	        ...acc,
	        [`${cur}-in`]: params => {
	          return animate({
	            [getScaleKey(cur)]: [0.4, 1],
	            opacity: [0, 1],
	            begin: e => {
	              e.animatables.forEach(e => {
	                e.target.style.transformOrigin = utils.anti[cur];
	                e.target.style.pointerEvents = "auto";
	              });
	            },
	            complete: instance => {
	              instance.animatables.forEach(e => e.target.style.pointerEvents = "auto");
	            },
	            ...params
	          });
	        },
	        [`${cur}-out`]: params => {
	          return animate({
	            [getScaleKey(cur)]: [1, 0.5],
	            opacity: [1, 0],
	            begin: instance => {
	              instance.animatables.forEach(e => {
	                e.target.style.transformOrigin = utils.anti[cur];
	                e.target.style.pointerEvents = "none";
	              });
	            },
	            complete: instance => {
	              instance.animatables.forEach(e => e.target.style.pointerEvents = "none");
	            },
	            ...params
	          });
	        }
	      };
	    }, {});

	    // import { keyframes } from "@unstyled-ui/core";

	    // export const spin = keyframes({
	    //   "0%": { transform: "rotate(0deg)" },
	    //   "100%": { transform: "rotate(359deg)" },
	    // });
	    const spin = "spin";

	    //TODO: zoom type optimization

	    const zoom = utils.placements.reduce((acc, cur) => {
	      return {
	        ...acc,
	        [`${cur}-in`]: params => {
	          return animate({
	            scale: [0.5, 1],
	            opacity: [0, 1],
	            begin: e => {
	              e.animatables.forEach(e => e.target.style.transformOrigin = utils.anti[cur]);
	            },
	            ...params
	          });
	        },
	        [`${cur}-out`]: params => {
	          return animate({
	            scale: [1, 0],
	            opacity: [1, 0],
	            begin: e => {
	              e.animatables.forEach(e => e.target.style.transformOrigin = utils.anti[cur]);
	            },
	            ...params
	          });
	        }
	      };
	    }, {});

	    //@ts-ignore
	    window.__zoom = zoom;
	    exports.animate = animate;
	    exports.fades = fades;
	    exports.slides = slides;
	    exports.spin = spin;
	    exports.useAnime = useAnime;
	    exports.zoom = zoom;
	    Object.defineProperty(exports, '__esModule', {
	      value: true
	    });
	  });
	})(dist$1, dist$1.exports);

	var dist = {exports: {}};

	(function (module, exports) {
	  (function (global, factory) {
	    factory(exports, require$$2__default["default"]) ;
	  })(commonjsGlobal, function (exports, utils) {

	    //FIXME: SSR
	    const supportIndivideTransform = window?.CSS?.supports?.("translate", "0px");
	    const xCenter = position => ypos => {
	      return {
	        top: ypos?.top,
	        bottom: ypos?.bottom,
	        left: "50%",
	        position,
	        ...(supportIndivideTransform ? {
	          translate: "-50% 0%"
	        } //FIXME: 0% maybe override the original value
	        : {
	          transform: "translateX(-50%)"
	        })
	      };
	    };
	    const yCenter = postion => xpos => {
	      return {
	        left: xpos?.left,
	        right: xpos?.right,
	        position: postion,
	        top: "50%",
	        ...(supportIndivideTransform ? {
	          translate: "0% -50%"
	        } : {
	          transform: "translateY(-50%)"
	        })
	      };
	    };
	    const xyCenter = position => () => {
	      return {
	        position,
	        left: "50%",
	        top: "50%",
	        ...(supportIndivideTransform ? {
	          translate: "-50% -50%"
	        } : {
	          transform: "translate(-50%,-50%)"
	        })
	      };
	    };
	    const absXCenter = xCenter("absolute");
	    const absYCenter = yCenter("absolute");
	    const absXYCenter = xyCenter("absolute");
	    const abs = ({
	      left,
	      top,
	      right,
	      bottom
	    }) => {
	      return {
	        position: "absolute",
	        left,
	        right,
	        top,
	        bottom
	      };
	    };
	    const leftTopCorner = {
	      left: 0,
	      top: 0
	    };
	    const rightTopCorner = {
	      top: 0,
	      right: 0
	    };
	    const rightBottomCorner = {
	      bottom: 0,
	      right: 0
	    };
	    const leftBottomCorner = {
	      bottom: 0,
	      left: 0
	    };

	    /**
	     * NOTE: the parent element must be relative
	     *
	     * @param ele :the action element
	     * @param placement
	     * @returns
	     */

	    const getPopoverPos = (placement, parentBoxW = "100%", parentBoxH = "100%") => {
	      switch (placement) {
	        case "bottom":
	          return absXCenter({
	            top: parentBoxH
	          });
	        case "top":
	          return absXCenter({
	            bottom: parentBoxH
	          });
	        case "left":
	          return absYCenter({
	            right: parentBoxW
	          });
	        case "right":
	          return absYCenter({
	            left: parentBoxW
	          });
	        default:
	          throw new Error("TypeError:placement must be one of top, bottom, left, right");
	      }
	    };
	    const arrow = direction => {
	      let polygon;
	      switch (direction) {
	        case "top":
	          polygon = "50% 0%, 0% 100%, 100% 100%";
	          break;
	        case "bottom":
	          polygon = "0% 0%, 50% 100%, 100% 0%";
	          break;
	        case "left":
	          polygon = "100% 0%, 0% 50%, 100% 100%";
	          break;
	        case "right":
	          polygon = "0% 0%, 0% 100%, 100% 50%";
	          break;
	        default:
	          throw new Error("TypeError:direction must be one of top, bottom, left, right");
	      }
	      return {
	        clipPath: `polygon(${polygon})`
	      };
	    };

	    //=====================================================================================================
	    // pseudoArrow:
	    // color of border of arrow is same as the border color of parent element
	    //=====================================================================================================

	    const pseudoArrow = (direction, width, height, css) => {
	      const {
	        border,
	        ...restCss
	      } = css || {};
	      if (!border) {
	        return {
	          _before: {
	            w: width,
	            h: height,
	            ...getPopoverPos(direction),
	            ...arrow(direction),
	            background: "inherit",
	            ...css
	          }
	        };
	      }
	      const res = border.match(/(?<size>\d+?)p?x? (?<type>\w+?) (?<color>.+)/);
	      // only support solid
	      if (!res) {
	        throw new Error(`invalid border: ${border}`);
	      }
	      //@ts-ignore
	      const {
	        size = 1,
	        color
	      } = res.groups;
	      const w = width - +size - 1;
	      const h = height - +size - 1;
	      return {
	        _before: {
	          w: width,
	          h: height,
	          ...getPopoverPos(direction),
	          ...arrow(direction),
	          background: color,
	          ...restCss
	        },
	        _after: {
	          w: w,
	          h: h,
	          ...getPopoverPos(direction),
	          ...arrow(direction),
	          background: "inherit",
	          ...restCss
	        }
	      };
	    };
	    const bgImg = (url, css = {}) => ({
	      backgroundImage: `url(${url})`,
	      backgroundPosition: "center",
	      backgroundSize: "cover",
	      backgroundRepeat: "no-repeat",
	      ...css
	    });
	    const borderRadiusForGroup = (borderRadius, direction) => {
	      const isVertical = direction === "vertical";
	      const firstElementProp = isVertical ? {
	        borderTopRightRadius: borderRadius,
	        borderTopLeftRadius: borderRadius
	      } : {
	        borderTopLeftRadius: borderRadius,
	        borderBottomLeftRadius: borderRadius
	      };
	      const lastElementProp = isVertical ? {
	        borderBottomLeftRadius: borderRadius,
	        borderBottomRightRadius: borderRadius
	      } : {
	        borderBottomRightRadius: borderRadius,
	        borderTopRightRadius: borderRadius
	      };
	      return {
	        "& > *:first-child": firstElementProp,
	        "& > *:last-child": lastElementProp
	      };
	    };
	    const gradientRoundedBorder = (bgColor, gradient) => {
	      return {
	        border: "1px solid transparent",
	        backgroundImage: `linear-gradient(${bgColor}, ${bgColor}),${gradient}`,
	        backgroundOrigin: "border-box",
	        backgroundClip: "content-box, border-box"
	      };
	    };
	    const roundBorderValue = height => {
	      return height / 2;
	    };
	    const gradientBorder = gradient => ({
	      borderStyle: "solid",
	      borderImageWidth: "1px",
	      borderImageSlice: 1,
	      borderImageSource: gradient
	    });
	    const alpha = (alpha, isWhite = true) => isWhite ? `rgba(255,255,255,${alpha})` : `rgba(0,0,0,${alpha})`;

	    // export const opacify = (opacity:number) => css`
	    //   &:
	    // `

	    const col = (fx = "flex-start", fy = "flex-start") => {
	      return {
	        display: "flex",
	        flexDirection: "column",
	        alignItems: fx,
	        justifyContent: fy
	      };
	    };
	    const cover = (x = 0) => ({
	      left: x,
	      top: x,
	      right: x,
	      bottom: x
	    });

	    /**
	     * child div height can not be 100% when height of parent is auto
	     * @returns
	     */
	    const eqHeight = () => ({
	      display: "flex",
	      alignItems: "stretch",
	      "&& > *": {
	        height: "auto"
	      }
	    });
	    const fixed = pos => ({
	      position: "fixed",
	      top: pos.top,
	      left: pos.left,
	      right: pos.right,
	      bottom: pos.bottom
	    });
	    const fixedXCenter = xCenter("fixed");
	    const fixedYCenter = yCenter("fixed");
	    const fixedXYCenter = xyCenter("fixed");
	    const flexCenter = {
	      display: "flex",
	      justifyContent: "center",
	      alignItems: "center"
	    };
	    const flexYCenter = {
	      display: "flex",
	      justifyContent: "flex-start",
	      alignItems: "center"
	    };
	    const rgap = gap => ({
	      "& > :where(:not(:last-child))": {
	        marginRight: gap
	      }
	    });
	    const vgap = gap => ({
	      "& > :where(:not(:last-child))": {
	        marginBottom: gap
	      }
	    });
	    const nCol = (_num, _cellWidth, cellHeight, rowGap = 0, columnGap = 0) => {
	      const nums = utils.toArray(_num);
	      const cellWidths = utils.toArray(_cellWidth);
	      if (nums.length !== cellWidths.length) {
	        throw new Error("must have same length");
	      }
	      return {
	        display: "grid",
	        justifyContent: "center",
	        gridAutoRows: cellHeight,
	        gridTemplateColumns: nums.map((e, idx) => `repeat(${e}, ${cellWidths[idx]})`),
	        rowGap,
	        columnGap
	      };
	    };
	    const row = (fx = "flex-start", fy = "center") => ({
	      display: "flex",
	      alignItems: fy,
	      justifyContent: fx,
	      flexWrap: "nowrap"
	    });

	    //divider and borderradius
	    const list = (isCol, css = {}) => ({
	      ...(isCol ? col("stretch") : row()),
	      "& > *": {
	        width: isCol ? "100%" : "auto",
	        //FIXME: 没必要了把？
	        flexShrink: 0
	      },
	      ...css
	    });

	    // https://www.zhangxinxu.com/wordpress/2015/01/css-page-scrollbar-toggle-center-no-jumping/
	    const addLeftPaddingInOrderXCenter = () => ({
	      paddingLeft: "calc(100vw - 100%)",
	      background: "#151E2B"
	    });
	    const divider = color => ({
	      "& > *:not(:last-child)": {
	        borderBottom: `1px solid ${color}`
	      }
	    });
	    const divider_p = color => ({
	      "& > *:not(:last-child)::after": {
	        width: "1px",
	        backgroundColor: `${color}`,
	        height: "100%"
	      }
	    });
	    const dividerAt = (placement, css) => {
	      const geo = {};
	      switch (placement) {
	        case "top":
	        case "bottom":
	          geo.height = "1px";
	          geo.width = "100%";
	          break;
	        case "left":
	        case "right":
	          geo.width = "1px";
	          geo.height = "100%";
	          break;
	        default:
	          throw new Error("TypeError:placement must be one of top, bottom, left, right");
	      }
	      return {
	        _after: {
	          ...getPopoverPos(placement),
	          ...geo,
	          ...css
	        }
	      };
	    };
	    const toggleDisplay = show => ({
	      display: show ? "flex" : "none"
	    });
	    const hidden = {
	      display: "none"
	    };
	    const toggleVisibility = visibility => ({
	      visibility: visibility ? "visible" : "hidden"
	    });
	    const textIndent = {
	      listStylePosition: "outside"
	    };
	    const mask = {
	      position: "fixed",
	      top: 0,
	      left: 0,
	      width: "100vw",
	      height: "100vh",
	      display: "flex",
	      justifyContent: "center",
	      alignItems: "center"
	    };
	    const pseudoElement = (pse, properties = {}) => {
	      return {
	        [`&::${pse}`]: {
	          position: "absolute",
	          content: `attr('data-${pse}')`,
	          top: 0,
	          left: 0,
	          width: "100%",
	          height: "100%",
	          ...properties
	        },
	        "&": {
	          position: "relative",
	          overflow: "hidden"
	        }
	      };
	    };
	    const linearGradientText = bg => ({
	      background: bg,
	      backgroundClip: "text",
	      WebkitBackgroundClip: "text",
	      WebkitTextFillColor: "transparent"
	    });
	    const typo = ({
	      fontSize,
	      fontWeight,
	      lineHeight,
	      fontFamily,
	      letterSpacing
	    }) => {
	      //TODO: type
	      return {
	        fontSize,
	        fontWeight,
	        lineHeight,
	        fontFamily,
	        letterSpacing
	      };
	    };
	    exports.abs = abs;
	    exports.absXCenter = absXCenter;
	    exports.absXYCenter = absXYCenter;
	    exports.absYCenter = absYCenter;
	    exports.addLeftPaddingInOrderXCenter = addLeftPaddingInOrderXCenter;
	    exports.alpha = alpha;
	    exports.arrow = arrow;
	    exports.bgImg = bgImg;
	    exports.borderRadiusForGroup = borderRadiusForGroup;
	    exports.col = col;
	    exports.cover = cover;
	    exports.divider = divider;
	    exports.dividerAt = dividerAt;
	    exports.divider_p = divider_p;
	    exports.eqHeight = eqHeight;
	    exports.fixed = fixed;
	    exports.fixedXCenter = fixedXCenter;
	    exports.fixedXYCenter = fixedXYCenter;
	    exports.fixedYCenter = fixedYCenter;
	    exports.flexCenter = flexCenter;
	    exports.flexYCenter = flexYCenter;
	    exports.getPopoverPos = getPopoverPos;
	    exports.gradientBorder = gradientBorder;
	    exports.gradientRoundedBorder = gradientRoundedBorder;
	    exports.hidden = hidden;
	    exports.leftBottomCorner = leftBottomCorner;
	    exports.leftTopCorner = leftTopCorner;
	    exports.linearGradientText = linearGradientText;
	    exports.list = list;
	    exports.mask = mask;
	    exports.nCol = nCol;
	    exports.pseudoArrow = pseudoArrow;
	    exports.pseudoElement = pseudoElement;
	    exports.rgap = rgap;
	    exports.rightBottomCorner = rightBottomCorner;
	    exports.rightTopCorner = rightTopCorner;
	    exports.roundBorderValue = roundBorderValue;
	    exports.row = row;
	    exports.supportIndivideTransform = supportIndivideTransform;
	    exports.textIndent = textIndent;
	    exports.toggleDisplay = toggleDisplay;
	    exports.toggleVisibility = toggleVisibility;
	    exports.typo = typo;
	    exports.vgap = vgap;
	    exports.xCenter = xCenter;
	    exports.xyCenter = xyCenter;
	    exports.yCenter = yCenter;
	    Object.defineProperty(exports, '__esModule', {
	      value: true
	    });
	  });
	})(dist, dist.exports);

	const Floating = props => {
	  const {
	    trigger = "click",
	    visible = false,
	    onToggle,
	    overlay: _overlay,
	    placement = "bottom",
	    offset: _offset = 10,
	    flip: _flip = true,
	    children,
	    anime = animate$1
	  } = props;
	  if (! /*#__PURE__*/React__default["default"].isValidElement(children)) {
	    throw new Error("TypeError:children must be reactElement");
	  }
	  const prev = react.usePrev(visible);
	  const overlayId = react.useGId();
	  const [visibility, setVisibility] = React.useState("hidden");
	  const {
	    x,
	    y,
	    reference,
	    floating,
	    strategy,
	    context
	  } = reactDomInteractions.useFloating({
	    open: visible,
	    onOpenChange: onToggle,
	    middleware: [_flip && reactDomInteractions.flip(), reactDomInteractions.shift(), reactDomInteractions.offset(_offset)],
	    whileElementsMounted: reactDomInteractions.autoUpdate,
	    placement
	  });
	  const triggers = utils.toArray(trigger);
	  const click = reactDomInteractions.useClick(context, {
	    enabled: triggers.includes("click")
	  });
	  const hover = reactDomInteractions.useHover(context, {
	    enabled: triggers.includes("hover")
	  });
	  const dismiss = reactDomInteractions.useDismiss(context);
	  const {
	    getReferenceProps,
	    getFloatingProps
	  } = reactDomInteractions.useInteractions([dismiss, click, hover]);
	  React.useEffect(() => {
	    if (!utils.isNullish(prev) && prev !== visible) {
	      setVisibility("visible");
	      anime?.(visible, placement, `#${overlayId}`);
	    }
	  }, [placement, visible, overlayId, prev, anime]);
	  const overlay = /*#__PURE__*/React__default["default"].cloneElement(_overlay, {
	    style: {
	      visibility: visibility,
	      position: strategy,
	      top: y ?? 0,
	      left: x ?? 0,
	      width: "max-content"
	    },
	    id: overlayId,
	    ref: floating,
	    ...getFloatingProps()
	  });

	  //@ts-ignore
	  const actionBtn = /*#__PURE__*/React__default["default"].cloneElement(children, {
	    //@ts-ignore
	    ref: reference,
	    ...getReferenceProps()
	  });
	  return /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
	    children: [actionBtn, /*#__PURE__*/jsxRuntime.jsx(reactDomInteractions.FloatingPortal, {
	      children: overlay
	    })]
	  });
	};

	//=====================================================================================================
	// animate
	//=====================================================================================================

	const animate$1 = (visible, placement, targets) => {

	  const key = `${placement}-${visible ? "in" : "out"}`;
	  dist$1.exports.zoom[key]({
	    targets
	  });
	};

	const Dropdown = props => {
	  const {
	    overlay: _overlay,
	    children,
	    onToggle,
	    ...restProps
	  } = props;
	  const [visible, setVisible] = React__default["default"].useState(false);
	  if (! /*#__PURE__*/React__default["default"].isValidElement(children)) {
	    throw new Error("TypeError:trigger must be reactElement");
	  }
	  const overlay = /*#__PURE__*/React__default["default"].cloneElement(_overlay, {
	    onClick: async e => {
	      setVisible(false); //disappear when selected
	      onToggle?.(false);
	      await _overlay.props.onClick?.(e);
	    }
	  });
	  return /*#__PURE__*/jsxRuntime.jsx(Floating, {
	    visible: visible,
	    trigger: "click",
	    onToggle: async isOpen => {
	      await onToggle?.(isOpen);
	      setVisible(isOpen);
	    },
	    placement: "bottom",
	    anime: animate,
	    flip: false,
	    overlay: overlay,
	    ...restProps,
	    children: children
	  });
	};

	//================================================================================================
	// animate
	//================================================================================================

	function animate(visible, placement, targets) {
	  // if (!supportIndivideTransform) {
	  // return;
	  // }
	  const key = `bottom-${visible ? "in" : "out"}`;
	  //@ts-ignore
	  dist$1.exports.slides[key]({
	    targets
	  });
	}

	const Popover = Floating;

	//TODO:只支持hover
	const Tooltip = Floating;

	exports.Dropdown = Dropdown;
	exports.Floating = Floating;
	exports.Popover = Popover;
	exports.Tooltip = Tooltip;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
