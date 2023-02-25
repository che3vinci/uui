(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@ant-design/icons'), require(' @yuejs/react?commonjs-require'), require(' @yuejs/react?commonjs-proxy'), require('lodash'), require('react'), require('react/jsx-runtime'), require(' @c3/react?commonjs-require'), require(' @c3/react?commonjs-proxy'), require(' @c3/utils?commonjs-require'), require(' @c3/utils?commonjs-proxy'), require('react-dom'), require('@yuejs/react')) :
	typeof define === 'function' && define.amd ? define(['@ant-design/icons', ' @yuejs/react?commonjs-require', ' @yuejs/react?commonjs-proxy', 'lodash', 'react', 'react/jsx-runtime', ' @c3/react?commonjs-require', ' @c3/react?commonjs-proxy', ' @c3/utils?commonjs-require', ' @c3/utils?commonjs-proxy', 'react-dom', '@yuejs/react'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.require$$0, global.require$$1, global.require$$2, global.require$$3, global.require$$4, global.require$$5, global.require$$6, global.require$$7, global.require$$8, global.require$$9, global.require$$11, global.react));
})(this, (function (require$$0, require$$1, require$$2, require$$3, require$$4, require$$5, require$$6, require$$7, require$$8, require$$9, require$$11, react) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
	var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
	var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
	var require$$3__default = /*#__PURE__*/_interopDefaultLegacy(require$$3);
	var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
	var require$$5__default = /*#__PURE__*/_interopDefaultLegacy(require$$5);
	var require$$6__default = /*#__PURE__*/_interopDefaultLegacy(require$$6);
	var require$$7__default = /*#__PURE__*/_interopDefaultLegacy(require$$7);
	var require$$8__default = /*#__PURE__*/_interopDefaultLegacy(require$$8);
	var require$$9__default = /*#__PURE__*/_interopDefaultLegacy(require$$9);
	var require$$11__default = /*#__PURE__*/_interopDefaultLegacy(require$$11);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var dist = {exports: {}};

	(function (module, exports) {
	  (function (global, factory) {
	    factory(exports, require$$0__default["default"], require$$1__default["default"], require$$2__default["default"], require$$3__default["default"], require$$4__default["default"], require$$5__default["default"], require$$6__default["default"], require$$7__default["default"], require$$8__default["default"], require$$9__default["default"], require$$2__default["default"], require$$11__default["default"], require$$7__default["default"]) ;
	  })(commonjsGlobal, function (exports, require$$0, react_commonjsRequire, require$$1, require$$2, React, require$$4, react_commonjsRequire$1, require$$5, require$$6, require$$7, react, ReactDOM, react$1) {

	    function _interopDefaultLegacy(e) {
	      return e && typeof e === 'object' && 'default' in e ? e : {
	        'default': e
	      };
	    }
	    var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
	    var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
	    var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
	    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	    var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
	    var require$$5__default = /*#__PURE__*/_interopDefaultLegacy(require$$5);
	    var require$$6__default = /*#__PURE__*/_interopDefaultLegacy(require$$6);
	    var require$$7__default = /*#__PURE__*/_interopDefaultLegacy(require$$7);
	    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
	    var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};
	    var dist$1 = {
	      exports: {}
	    };
	    (function (module, exports) {
	      (function (global, factory) {
	        factory(exports, require$$0__default["default"], require$$1__default["default"], require$$2__default["default"], React__default["default"], require$$4__default["default"], require$$5__default["default"], require$$6__default["default"], require$$7__default["default"]);
	      })(commonjsGlobal$1, function (exports, icons, react, _, React, jsxRuntime, react$1, utils_commonjsRequire, require$$0) {
	        function _interopDefaultLegacy(e) {
	          return e && typeof e === 'object' && 'default' in e ? e : {
	            'default': e
	          };
	        }
	        var ___default = /*#__PURE__*/_interopDefaultLegacy(_);
	        var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	        var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
	        const Atomic = react.styled("div", {
	          boxSizing: "border-box",
	          p: 0,
	          m: 0,
	          variants: {
	            shape: {
	              round: {
	                borderRadius: "100000px"
	              },
	              rect: {
	                borderRadius: 0
	              }
	            }
	          }
	        });
	        const __Button = react.styled(Atomic, {
	          display: "flex",
	          alignItems: "center",
	          justifyContent: "center",
	          cursor: "pointer",
	          "&[disabled]": {
	            cursor: "not-allowed"
	          }
	        }, {
	          as: "button"
	        });
	        const _Button = props => {
	          const {
	            preventDefault,
	            onClick,
	            loading,
	            loadingIcon,
	            children,
	            disabled,
	            debounce: _debounce = 400,
	            ...restProps
	          } = props;
	          const debounce = typeof _debounce === "boolean" ? _debounce ? 400 : 0 : _debounce;
	          const handleClick = React.useCallback(async e => {
	            if (preventDefault) {
	              e.preventDefault();
	            }
	            if (loading) {
	              return;
	            }
	            await onClick?.(e);
	          }, [loading, onClick, preventDefault]);
	          const DebouncedClick = React.useMemo(() => debounce > 0 ? ___default["default"].debounce(handleClick, debounce, {
	            leading: true,
	            trailing: false
	          }) : handleClick, [debounce, handleClick]);
	          return /*#__PURE__*/jsxRuntime.jsxs(__Button, {
	            onClick: DebouncedClick,
	            disabled: disabled || loading,
	            ...restProps,
	            children: [loading && (loadingIcon || /*#__PURE__*/jsxRuntime.jsx(icons.LoadingOutlined, {
	              className: "loading-icon"
	            })), children]
	          });
	        };
	        const Button = react.styled(_Button, {});
	        const useButton = (btn, option) => {
	          const {
	            useLoading
	          } = option;
	          const [loading, showLoading, hideLoading] = react$1.useSwitch(false);
	          const onClick = React.useCallback(async e => {
	            try {
	              useLoading && showLoading();
	              await btn.props.onClick?.(e);
	            } finally {
	              useLoading && hideLoading();
	            }
	          }, [btn.props, hideLoading, showLoading, useLoading]);
	          return /*#__PURE__*/React__default["default"].cloneElement(btn, {
	            loading,
	            onClick
	          });
	        };
	        const Link = react.styled(Atomic, {
	          textDecoration: "none",
	          cursor: "pointer"
	        }, {
	          as: "a"
	        });
	        var commonjsGlobal$1$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof commonjsGlobal$1 !== 'undefined' ? commonjsGlobal$1 : typeof self !== 'undefined' ? self : {};
	        var dist = {
	          exports: {}
	        };
	        (function (module, exports) {
	          (function (global, factory) {
	            factory(exports, require$$0__default["default"]);
	          })(commonjsGlobal$1$1, function (exports, utils) {
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
	        const Text = react.styled(Atomic, {
	          variants: {
	            gradient: {
	              dynamic(color) {
	                return dist.exports.linearGradientText(color);
	              }
	            },
	            rows: {
	              dynamic(rows) {
	                return {
	                  display: "-webkit-box",
	                  WebkitLineClamp: rows,
	                  WebkitBoxOrient: "vertical",
	                  overflow: "hidden",
	                  wordBreak: rows == 1 ? "break-all" : "normal"
	                };
	              }
	            }
	          }
	        }, {
	          as: "p"
	        });
	        const Title = react.styled(Text, {}, {
	          as: "h1"
	        });
	        const SubTitle = react.styled(Text, {}, {
	          as: "h2"
	        });
	        const Description = react.styled(Text, {}, {
	          as: "p"
	        });

	        // export type ImageProps = CSSProps & {
	        //   fallbackSrc?: URL;
	        //   loadingIndicator?: URL;
	        // } & React.ImgHTMLAttributes<HTMLImageElement>;

	        const _Image = react.styled(Atomic, {
	          objectFit: "cover",
	          objectPosition: "center",
	          flexShrink: 0,
	          maxWidth: "100%"
	        }, {
	          as: "img"
	        });
	        const Image = _Image;
	        // export const Image: React.FC<ImageProps> = props => {
	        //   const [isError, errorOn] = useSwitch(false);
	        //   const [isLoading, loadingOff] = useSwitch(true);
	        //   const {
	        //     fallbackSrc = '',
	        //     src,
	        //     onLoad,
	        //     onError,
	        //     ...restProps
	        //   } = props;

	        //   const handleLoad = useCallback(
	        //     (e: any) => {
	        //       errorOn();
	        //       loadingOff();
	        //       onLoad && onLoad(e);
	        //     },
	        //     [errorOn, loadingOff, onLoad]
	        //   );
	        //   const handleError = useCallback(
	        //     (e: any) => {
	        //       loadingOff();
	        //       onError && onError(e);
	        //     },
	        //     [loadingOff, onError]
	        //   );

	        //   return (
	        //     <_Image
	        //       as="img"
	        //       // onError={handleError}
	        //       // onLoad={handleLoad}
	        //       src={isError ? fallbackSrc : src}
	        //       {...restProps}
	        //     />
	        //   );
	        // };

	        const Icon = Image;
	        const Avatar = react.styled(Image, {
	          round: true
	        });
	        const Space = react.styled(Atomic, {
	          display: "block",
	          flexShrink: 0,
	          variants: {
	            size: {
	              dynamic(size) {
	                return {
	                  w: size,
	                  h: size
	                };
	              }
	            }
	          }
	        });
	        exports.Atomic = Atomic;
	        exports.Avatar = Avatar;
	        exports.Button = Button;
	        exports.Description = Description;
	        exports.Icon = Icon;
	        exports.Image = Image;
	        exports.Link = Link;
	        exports.Space = Space;
	        exports.SubTitle = SubTitle;
	        exports.Text = Text;
	        exports.Title = Title;
	        exports._Button = _Button;
	        exports.useButton = useButton;
	        Object.defineProperty(exports, '__esModule', {
	          value: true
	        });
	      });
	    })(dist$1, dist$1.exports);
	    const Box = react.styled(dist$1.exports.Atomic, {
	      display: "flex",
	      variants: {
	        dbg: {
	          true: {
	            "&,& *": {
	              outline: "1px solid rgba(220, 108, 108, 0.5)"
	            }
	          }
	        }
	      }
	    }, {
	      as: "u-box"
	    });
	    Box.displayName = "Box";
	    var dist = {
	      exports: {}
	    };
	    (function (module, exports) {
	      (function (global, factory) {
	        factory(exports, require$$7__default["default"]);
	      })(commonjsGlobal$1, function (exports, utils) {
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
	    const Row = react.styled(Box, {
	      display: "flex",
	      flexDirection: "row",
	      alignItems: "center",
	      justifyContent: "flex-start",
	      variants: {
	        gap: {
	          dynamic: gap => ({
	            ...dist.exports.rgap(gap)
	          })
	        },
	        fx: {
	          dynamic: fx => ({
	            justifyContent: fx
	          })
	        },
	        fy: {
	          dynamic: fy => ({
	            alignItems: fy
	          })
	        }
	      }
	    }, {
	      as: "u-row"
	    });
	    const Col = react.styled(Box, {
	      display: "flex",
	      flexDirection: "column",
	      alignItems: "flex-start",
	      justifyContent: "flex-start",
	      variants: {
	        gap: {
	          //TODO:使用@supports来判断是否支持flex中使用gap属性
	          dynamic: value => ({
	            ...dist.exports.vgap(value)
	            // gap: value,
	          })
	        },

	        fx: {
	          dynamic: fx => ({
	            alignItems: fx
	          })
	        },
	        fy: {
	          dynamic: fy => ({
	            justifyContent: fy
	          })
	        }
	      }
	    }, {
	      as: "u-col"
	    });

	    //TODO: use `useMediaQuery` to detect mobile
	    //使用config中的配置来判断是否是移动端，而不是写死的768px
	    const isMobile = "@media (max-width: 768px)";

	    /**
	     * Responsive
	     * column on mobile, row on desktop
	     */
	    const Responsive = react.styled(Box, {
	      display: "flex",
	      flexDirection: "row",
	      flexWrap: "nowrap",
	      [isMobile]: {
	        flexDirection: "column"
	      },
	      variants: {
	        fx: {
	          dynamic: fx => ({
	            justifyContent: fx,
	            [isMobile]: {
	              alignItems: fx
	            }
	          })
	        },
	        fy: {
	          dynamic: fy => ({
	            alignItems: fy,
	            [isMobile]: {
	              justifyContent: fy
	            }
	          })
	        }
	      }
	    });
	    const __Fixed = react.styled(Box, {
	      position: "fixed"
	    }, {
	      as: "u-fixed"
	    });
	    const Fixed = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
	      const portal = /*#__PURE__*/ReactDOM__default["default"].createPortal( /*#__PURE__*/require$$4.jsx(__Fixed, {
	        ...props,
	        ref: ref
	      }), document.body);
	      return portal;
	    });
	    Fixed.displayName = "Fixed";
	    const __Grid = react.styled("u-grid", {
	      display: "grid",
	      placeContent: "center"
	    });
	    const Grid = /*#__PURE__*/React.forwardRef((props, ref) => {
	      const {
	        data,
	        renderItem,
	        ...restProps
	      } = props;
	      return /*#__PURE__*/require$$4.jsx(__Grid, {
	        ...restProps,
	        ref: ref,
	        children: data.map((item, index) => {
	          return renderItem?.(item, index) || item.renderItem?.(item, index) || /*#__PURE__*/require$$4.jsx(require$$4.Fragment, {});
	        })
	      });
	    });
	    Grid.displayName = "Grid";
	    const __Stack = react.styled(Box, {
	      position: "relative",
	      display: "inline-block",
	      overflow: "hidden",
	      w: "max-content",
	      "& > :not(:first-child)": {
	        left: 0,
	        top: 0,
	        position: "absolute"
	      }
	    }, {
	      as: "u-stack"
	    });
	    const Stack = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
	      const {
	        body,
	        children,
	        ...restProps
	      } = props;
	      return /*#__PURE__*/require$$4.jsxs(__Stack, {
	        ...restProps,
	        ref: ref,
	        children: [body, children]
	      });
	    });
	    Stack.displayName = "Stack";
	    // export const Stack = styled(_Stack, {});

	    const Abs = react.styled(Box, {
	      position: "absolute"
	    }, {
	      as: "u-abs"
	    });
	    const _Relative = react.styled(Box, {
	      position: "relative"
	    }, {
	      as: "u-relative"
	    });
	    const __List = react.styled(Box, {
	      listStyle: "none",
	      flexWrap: "nowrap",
	      variants: {
	        direction: {
	          column: {
	            flexDirection: "column",
	            alignItems: "stretch" //fx
	          },

	          row: {
	            flexDirection: "row"
	          }
	        }
	      }
	    }, {
	      as: "u-ul"
	    });
	    const List = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
	      const {
	        data,
	        renderItem,
	        direction = "column",
	        updateData,
	        onClick: _onClick,
	        ...restProps
	      } = props;
	      const on = react$1.useExclusive(data, "active", updateData);
	      const onClick = React.useCallback(async e => {
	        await _onClick?.(e);
	      }, [_onClick]);
	      return /*#__PURE__*/require$$4.jsx(__List, {
	        onClick: onClick,
	        direction: direction,
	        ...restProps,
	        ref: ref,
	        children: data.map((e, idx) => {
	          const item = e.renderItem?.(e, idx) || renderItem?.(e, idx) || /*#__PURE__*/require$$4.jsx(require$$4.Fragment, {});
	          if (! /*#__PURE__*/React__default["default"].isValidElement(item)) {
	            return item;
	          }
	          return /*#__PURE__*/React__default["default"].cloneElement(item, {
	            //@ts-ignore
	            onClick: async event => {
	              on(e.id);
	              //@ts-ignore
	              await item.props.onClick?.(event);
	            },
	            "data-active": e.active
	          });
	        })
	      });
	    });
	    List.displayName = "List";
	    exports.Abs = Abs;
	    exports.Box = Box;
	    exports.Col = Col;
	    exports.Fixed = Fixed;
	    exports.Grid = Grid;
	    exports.List = List;
	    exports.Responsive = Responsive;
	    exports.Row = Row;
	    exports.Stack = Stack;
	    exports._Relative = _Relative;
	    Object.defineProperty(exports, '__esModule', {
	      value: true
	    });
	  });
	})(dist, dist.exports);

	const __Viewport = react.styled(dist.exports.Col, {
	  w: "100vw",
	  fx: "center"
	});
	const __Main = react.styled(dist.exports.Col, {
	  minHeight: "100vh",
	  "& > *": {
	    width: "100%"
	  },
	  variants: {
	    w: {
	      dynamic(x) {
	        return {
	          width: x
	        };
	      }
	    }
	  }
	}, {
	  as: "main"
	});
	const _Page = props => {
	  const {
	    wOfDd,
	    children,
	    ...restProps
	  } = props;
	  return /*#__PURE__*/require$$5.jsx(__Viewport, {
	    className: "viewport",
	    ...restProps,
	    children: /*#__PURE__*/require$$5.jsx(__Main, {
	      w: wOfDd,
	      children: children
	    })
	  });
	};
	react.styled(_Page, {});

}));
