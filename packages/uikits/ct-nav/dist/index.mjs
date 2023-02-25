import { noop } from '@c3/utils';
import { LoadingOutlined } from '@ant-design/icons';
import { styled } from '@yuejs/react';
import _ from 'lodash';
import React, { useCallback, useMemo, forwardRef } from 'react';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useExclusive, useEventListener, useMount } from '@c3/react';
import ReactDOM from 'react-dom';

const Atomic = styled("div", {
  "variants-shape-round": "variants-shape-round-dtVMWK",
  "variants-shape-rect": "variants-shape-rect-iydAuT"
}, "baseStyle-kZRiXr");

const __Button = styled(Atomic, {}, "baseStyle-fzwWap", {
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
  const handleClick = useCallback(async e => {
    if (preventDefault) {
      e.preventDefault();
    }
    if (loading) {
      return;
    }
    await onClick?.(e);
  }, [loading, onClick, preventDefault]);
  const DebouncedClick = useMemo(() => debounce > 0 ? _.debounce(handleClick, debounce, {
    leading: true,
    trailing: false
  }) : handleClick, [debounce, handleClick]);
  return /*#__PURE__*/jsxs(__Button, {
    onClick: DebouncedClick,
    disabled: disabled || loading,
    ...restProps,
    children: [loading && (loadingIcon || /*#__PURE__*/jsx(LoadingOutlined, {
      className: "loading-icon"
    })), children]
  });
};
styled(_Button, {}, "baseStyle-PJLV");

styled(Atomic, {}, "baseStyle-fGLCmB", {
  as: "a"
});

const Text = styled(Atomic, {
  "variants-gradient-dynamic": "variants-gradient-dynamic-ivDDh",
  "variants-rows-dynamic": "variants-rows-dynamic-LOOSj"
}, "baseStyle-PJLV", {
  as: "p"
});

styled(Text, {}, "baseStyle-PJLV", {
  as: "h1"
});
styled(Text, {}, "baseStyle-PJLV", {
  as: "h2"
});
styled(Text, {}, "baseStyle-PJLV", {
  as: "p"
});

// export type ImageProps = CSSProps & {
//   fallbackSrc?: URL;
//   loadingIndicator?: URL;
// } & React.ImgHTMLAttributes<HTMLImageElement>;

const _Image = styled(Atomic, {}, "baseStyle-grJXBd", {
  as: "img"
});
const Image = _Image;
styled(Image, {}, "baseStyle-moRr");

styled(Atomic, {
  "variants-size-dynamic": "variants-size-dynamic-dQwCki"
}, "baseStyle-dPWzRY");

const Box = styled(Atomic, {
  "variants-dbg-true": "variants-dbg-true-cjqOyh"
}, "baseStyle-dhzjXW", {
  as: "u-box"
});
Box.displayName = "Box";

const Row = styled(Box, {
  "variants-gap-dynamic": "variants-gap-dynamic-hJEYEx",
  "variants-fx-dynamic": "variants-fx-dynamic-hDAmCf",
  "variants-fy-dynamic": "variants-fy-dynamic-yrjGO"
}, "baseStyle-jwtIMV", {
  as: "u-row"
});

const Col = styled(Box, {
  "variants-gap-dynamic": "variants-gap-dynamic-iCYOfC",
  "variants-fx-dynamic": "variants-fx-dynamic-byhcxn",
  "variants-fy-dynamic": "variants-fy-dynamic-fBSwba"
}, "baseStyle-eVKEMs", {
  as: "u-col"
});

/**
 * Responsive
 * column on mobile, row on desktop
 */
styled(Box, {
  "variants-fx-dynamic": "variants-fx-dynamic-bduvFY",
  "variants-fy-dynamic": "variants-fy-dynamic-iiDvRI"
}, "baseStyle-lhuref");

const __Fixed = styled(Box, {}, "baseStyle-dguCHI", {
  as: "u-fixed"
});
const Fixed = /*#__PURE__*/React.forwardRef((props, ref) => {
  const portal = /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/jsx(__Fixed, {
    ...props,
    ref: ref
  }), document.body);
  return portal;
});
Fixed.displayName = "Fixed";

const __Grid = styled("u-grid", {}, "baseStyle-bKdkJy");
const Grid = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    data,
    renderItem,
    ...restProps
  } = props;
  return /*#__PURE__*/jsx(__Grid, {
    ...restProps,
    ref: ref,
    children: data.map((item, index) => {
      return renderItem?.(item, index) || item.renderItem?.(item, index) || /*#__PURE__*/jsx(Fragment, {});
    })
  });
});
Grid.displayName = "Grid";

const __Stack = styled(Box, {}, "baseStyle-iXFdhL", {
  as: "u-stack"
});
const Stack = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    body,
    children,
    ...restProps
  } = props;
  return /*#__PURE__*/jsxs(__Stack, {
    ...restProps,
    ref: ref,
    children: [body, children]
  });
});
Stack.displayName = "Stack";
// export const Stack = styled(_Stack, {});

styled(Box, {}, "baseStyle-bMCfDd", {
  as: "u-abs"
});

styled(Box, {}, "baseStyle-cmpvrW", {
  as: "u-relative"
});

const __List = styled(Box, {
  "variants-direction-column": "variants-direction-column-dUzzmp",
  "variants-direction-row": "variants-direction-row-ejCoEP"
}, "baseStyle-gNbevc", {
  as: "u-ul"
});
const List = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    data,
    renderItem,
    direction = "column",
    updateData,
    onClick: _onClick,
    ...restProps
  } = props;
  const on = useExclusive(data, "active", updateData);
  const onClick = useCallback(async e => {
    await _onClick?.(e);
  }, [_onClick]);
  return /*#__PURE__*/jsx(__List, {
    onClick: onClick,
    direction: direction,
    ...restProps,
    ref: ref,
    children: data.map((e, idx) => {
      const item = e.renderItem?.(e, idx) || renderItem?.(e, idx) || /*#__PURE__*/jsx(Fragment, {});
      if (! /*#__PURE__*/React.isValidElement(item)) {
        return item;
      }
      return /*#__PURE__*/React.cloneElement(item, {
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

const anti = direction => direction === "row" ? "column" : "row";

//TODO:支持hash跳转
const Nav = props => {
  const {
    menuConfig,
    updateConfig,
    direction,
    renderItem,
    renderContent,
    ...restProps
  } = props;
  const Layout = direction === "row" ? Row : Col;
  const nav = useMemo(() => /*#__PURE__*/jsx(List, {
    as: "u-nav",
    data: menuConfig,
    direction: anti(direction),
    renderItem: (e, idx) => {
      return e.renderItem?.(e, idx) || renderItem?.(e) || /*#__PURE__*/jsx(Fragment, {});
    },
    updateData: updateConfig
  }), [direction, menuConfig, renderItem, updateConfig]);
  const content = useMemo(() => {
    return /*#__PURE__*/jsx(List, {
      data: menuConfig,
      direction: anti(direction),
      renderItem: e => e.renderContent?.(e) || renderContent?.(e) || /*#__PURE__*/jsx(Fragment, {}),
      updateData: noop,
      className: "css-hxukYx"
    });
  }, [direction, menuConfig, renderContent]);
  return /*#__PURE__*/jsxs(Layout, {
    as: "u-switcher",
    ...restProps,
    children: [nav, content]
  });
};

const SwitchWithHash = props => {
  const {
    menuConfig,
    updateConfig
  } = props;
  const on = useExclusive(menuConfig, "active", updateConfig);
  const switchToHash = useCallback(() => {
    const hash = window.location.hash;
    if (hash) {
      on(hash.slice(1));
    }
  }, [on]);
  useEventListener(window, "hashchange", switchToHash);
  useMount(switchToHash);
  return /*#__PURE__*/jsx(Nav, {
    ...props
  });
};

const useSteps = props => {
  const {
    data,
    updateData
  } = props;
  const on = useExclusive(data, "active", updateData);
  const activeIndex = useMemo(() => data.findIndex(e => e.active), [data]);
  const nextIndex = activeIndex < data.length - 1 ? activeIndex + 1 : 0;
  const prevIndex = activeIndex > 0 ? activeIndex - 1 : data.length - 1;
  const goNext = useCallback(() => {
    on(data[nextIndex].id);
  }, [nextIndex, data, on]);
  const goPrev = useCallback(() => {
    on(data[prevIndex].id);
  }, [prevIndex, data, on]);
  const goTo = useCallback(idx => {
    on(data[idx].id);
  }, [data, on]);
  return {
    goNext,
    goPrev,
    goTo,
    activeIndex,
    nextIndex,
    prevIndex
  };
};

const SideBar = props => /*#__PURE__*/jsx(Nav, {
  direction: "row",
  ...props
});
const Menus = Nav;
const Tabs = props => /*#__PURE__*/jsx(Nav, {
  direction: "column",
  ...props
});

export { Menus, Nav, SideBar, SwitchWithHash, Tabs, useSteps };
