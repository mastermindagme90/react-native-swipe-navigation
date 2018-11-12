Object.defineProperty(exports,"__esModule",{value:true});exports.GESTURES=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='lib/Gesture.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var GESTURES=exports.GESTURES={SWIPE_UP:'SWIPE_UP',SWIPE_DOWN:'SWIPE_DOWN',SWIPE_LEFT:'SWIPE_LEFT',SWIPE_RIGHT:'SWIPE_RIGHT'};var Gesture=function(_React$Component){_inherits(Gesture,_React$Component);function Gesture(){_classCallCheck(this,Gesture);return _possibleConstructorReturn(this,(Gesture.__proto__||Object.getPrototypeOf(Gesture)).apply(this,arguments));}_createClass(Gesture,[{key:'componentWillMount',value:function componentWillMount(){var _this2=this;var _props=this.props,onSwipeShouldAllow=_props.onSwipeShouldAllow,onSwipeStarted=_props.onSwipeStarted,onSwipeUpStarted=_props.onSwipeUpStarted,onSwipeDownStarted=_props.onSwipeDownStarted,onSwipeLeftStarted=_props.onSwipeLeftStarted,onSwipeRightStarted=_props.onSwipeRightStarted,onSwiping=_props.onSwiping,onSwipingUp=_props.onSwipingUp,onSwipingDown=_props.onSwipingDown,onSwipingLeft=_props.onSwipingLeft,onSwipingRight=_props.onSwipingRight,onRelease=_props.onRelease,onSwipeUpRelease=_props.onSwipeUpRelease,onSwipeDownRelease=_props.onSwipeDownRelease,onSwipeLeftRelease=_props.onSwipeLeftRelease,onSwipeRightRelease=_props.onSwipeRightRelease;var _Dimensions$get=_reactNative.Dimensions.get('window'),height=_Dimensions$get.height,width=_Dimensions$get.width;this.touchXStart=undefined;this.touchYStart=undefined;this.panResponder=_reactNative.PanResponder.create({onStartShouldSetPanResponderCapture:function onStartShouldSetPanResponderCapture(e){_this2.touchXStart=e.nativeEvent.pageX;_this2.touchYStart=e.nativeEvent.pageY;},onMoveShouldSetPanResponderCapture:function onMoveShouldSetPanResponderCapture(e,_ref){var dx=_ref.dx,dy=_ref.dy,moveX=_ref.moveX,moveY=_ref.moveY;if(_this2.touchXStart>60&&_this2.touchXStart<width-60&&_this2.touchYStart>60&&_this2.touchYStart<height-60){return false;}return onSwipeShouldAllow();},onPanResponderGrant:function onPanResponderGrant(){},onPanResponderMove:function onPanResponderMove(e,gestureState){var dy=gestureState.dy,dx=gestureState.dx,moveX=gestureState.moveX,moveY=gestureState.moveY,x0=gestureState.x0,y0=gestureState.y0;if(!_this2.gesture&&(Math.abs(dy)>3||Math.abs(dx)>3)){var angle=Math.atan2(moveY-y0,moveX-x0)*180/Math.PI;if(angle>45&&angle<=135){_this2.gesture=GESTURES.SWIPE_DOWN;onSwipeDownStarted(gestureState);}if(angle>=135&&angle<=180||angle<-135&&angle>=-180){_this2.gesture=GESTURES.SWIPE_LEFT;onSwipeLeftStarted(gestureState);}if(angle<-45&&angle>=-135){_this2.gesture=GESTURES.SWIPE_UP;onSwipeUpStarted(gestureState);}if(angle>-45&&angle<=45){_this2.gesture=GESTURES.SWIPE_RIGHT;onSwipeRightStarted(gestureState);}onSwipeStarted(_this2.gesture,gestureState);}if(_this2.gesture){switch(_this2.gesture){case GESTURES.SWIPE_UP:{onSwipingUp(gestureState);break;}case GESTURES.SWIPE_DOWN:{onSwipingDown(gestureState);break;}case GESTURES.SWIPE_LEFT:{onSwipingLeft(gestureState);break;}case GESTURES.SWIPE_RIGHT:{onSwipingRight(gestureState);break;}}onSwiping(_this2.gesture,gestureState);}},onPanResponderRelease:function onPanResponderRelease(e,gestureState){if(_this2.gesture===GESTURES.SWIPE_UP){onSwipeUpRelease(gestureState);}else if(_this2.gesture===GESTURES.SWIPE_DOWN){onSwipeDownRelease(gestureState);}else if(_this2.gesture===GESTURES.SWIPE_LEFT){onSwipeLeftRelease(gestureState);}else{onSwipeRightRelease(gestureState);}onRelease(gestureState,_this2.gesture);_this2.gesture=null;}});}},{key:'render',value:function render(){return _react2.default.createElement(_reactNative.View,_extends({style:{flex:1,backgroundColor:'transparent'}},this.panResponder.panHandlers,{__source:{fileName:_jsxFileName,lineNumber:132}}),this.props.children);}}]);return Gesture;}(_react2.default.Component);Gesture.propTypes={onSwipeShouldAllow:_propTypes2.default.func,onSwipeStarted:_propTypes2.default.func,onSwipeDownStarted:_propTypes2.default.func,onSwipeUpStarted:_propTypes2.default.func,onSwipeRightStarted:_propTypes2.default.func,onSwipeLeftStarted:_propTypes2.default.func,onSwiping:_propTypes2.default.func,onSwipingDown:_propTypes2.default.func,onSwipingUp:_propTypes2.default.func,onSwipingRight:_propTypes2.default.func,onSwipingLeft:_propTypes2.default.func,onSwipeUpRelease:_propTypes2.default.func,onSwipeDownRelease:_propTypes2.default.func,onSwipeLeftRelease:_propTypes2.default.func,onSwipeRightRelease:_propTypes2.default.func,onRelease:_propTypes2.default.func};Gesture.defaultProps={onSwipeShouldAllow:function onSwipeShouldAllow(){return true;},onSwipeStarted:function onSwipeStarted(){},onSwipeDownStarted:function onSwipeDownStarted(){},onSwipeUpStarted:function onSwipeUpStarted(){},onSwipeRightStarted:function onSwipeRightStarted(){},onSwipeLeftStarted:function onSwipeLeftStarted(){},onSwiping:function onSwiping(){},onSwipingDown:function onSwipingDown(){},onSwipingUp:function onSwipingUp(){},onSwipingRight:function onSwipingRight(){},onSwipingLeft:function onSwipingLeft(){},onSwipeUpRelease:function onSwipeUpRelease(){},onSwipeDownRelease:function onSwipeDownRelease(){},onSwipeLeftRelease:function onSwipeLeftRelease(){},onSwipeRightRelease:function onSwipeRightRelease(){},onRelease:function onRelease(){}};exports.default=Gesture;