/**
 * Generated with nimble-ide v5.0 on 08/05/2024 11:27 pm.
 * Created for the nimbleJS runtime.
 * (c)2016 by Nimble Solutions, All rights reserved.
 *
 * version: 5.0
 **/
 
if (!$heap) { var $heap = { }; }
$heap.diagnose = { };
$heap.diagnose.Code = {
	_callback: null,
	SlideDesktop: function(oldD, newD) {
		var desk = $f.elem('desktop' + newD + '.body');
		if (!desk) return;
		
		function fadeIn() {
		    if (desk.style.opacity < 1) {
		        desk.style.opacity = (Number(desk.style.opacity) + 0.1).toFixed(2);
		        setTimeout( fadeIn, 60 );
		    } else { 
		        desk.style.opacity = 1;
		        $d.setactive(newD);
		        DESKTOP.switching = false;
		    }
		}
		
		DESKTOP.switching = true;
		desk.style.opacity = 0;
		$d.show('desktop'+ newD +'.body');
		$f.setpos('desktop' + newD + '.body', '', 0, 0);
		$f.slideto('desktop' + oldD + '.body', '', 100, 0, -1, -1, 0.25, function(anim) {
			if (anim.pos == 100) {
				$f.slideto('desktop' + oldD + '.body', '', -(1.35 * DESKTOP.width), 0, -1, -1, 0.50, function(anim) {
					if (anim.pos == 100) {
						fadeIn();
					}
				});
			}
		});
	},
	Ini: { 
	 },
	Csv: { 
	 },
	Data: { 
		"black.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>black<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>b50<DQ>: <DQ>#fafafa<DQ>, <CR>' + 
			'		<DQ>b100<DQ>: <DQ>#f5f5f5<DQ>, <CR>' + 
			'		<DQ>b200<DQ>: <DQ>#eeeeee<DQ>, <CR>' + 
			'		<DQ>b300<DQ>: <DQ>#e0e0e0<DQ>, <CR>' + 
			'		<DQ>b400<DQ>: <DQ>#bdbdbd<DQ>, <CR>' + 
			'		<DQ>b500<DQ>: <DQ>#9e9e9e<DQ>, <CR>' + 
			'		<DQ>b600<DQ>: <DQ>#757575<DQ>, <CR>' + 
			'		<DQ>b700<DQ>: <DQ>#616161<DQ>, <CR>' + 
			'		<DQ>b800<DQ>: <DQ>#424242<DQ>, <CR>' + 
			'		<DQ>b900<DQ>: <DQ>#212121<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		},
		"bluegray.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>bluegray<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>bg50<DQ>: <DQ>#eceff1<DQ>, <CR>' + 
			'		<DQ>bg100<DQ>: <DQ>#cfd8dc<DQ>, <CR>' + 
			'		<DQ>bg200<DQ>: <DQ>#b0bec5<DQ>, <CR>' + 
			'		<DQ>bg300<DQ>: <DQ>#90a4ae<DQ>, <CR>' + 
			'		<DQ>bg400<DQ>: <DQ>#78909c<DQ>, <CR>' + 
			'		<DQ>bg500<DQ>: <DQ>#607d8b<DQ>, <CR>' + 
			'		<DQ>bg600<DQ>: <DQ>#546e7a<DQ>, <CR>' + 
			'		<DQ>bg700<DQ>: <DQ>#455a64<DQ>, <CR>' + 
			'		<DQ>bg800<DQ>: <DQ>#37474f<DQ>, <CR>' + 
			'		<DQ>bg900<DQ>: <DQ>#263238<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		},
		"brown.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>brown<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>br50<DQ>: <DQ>#efebe9<DQ>, <CR>' + 
			'		<DQ>br100<DQ>: <DQ>#d7ccc8<DQ>, <CR>' + 
			'		<DQ>br200<DQ>: <DQ>#bcaaa4<DQ>, <CR>' + 
			'		<DQ>br300<DQ>: <DQ>#a1887f<DQ>, <CR>' + 
			'		<DQ>br400<DQ>: <DQ>#8d6e63<DQ>, <CR>' + 
			'		<DQ>br500<DQ>: <DQ>#795548<DQ>, <CR>' + 
			'		<DQ>br600<DQ>: <DQ>#6d4c41<DQ>, <CR>' + 
			'		<DQ>br700<DQ>: <DQ>#5d4037<DQ>, <CR>' + 
			'		<DQ>br800<DQ>: <DQ>#4e342e<DQ>, <CR>' + 
			'		<DQ>br900<DQ>: <DQ>#3e2723<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		},
		"palette.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>light blue<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>color50<DQ>: <DQ>#e1f5fe<DQ>, <CR>' + 
			'		<DQ>color100<DQ>: <DQ>#b3e5fc<DQ>, <CR>' + 
			'		<DQ>color200<DQ>: <DQ>#81d4fa<DQ>, <CR>' + 
			'		<DQ>color300<DQ>: <DQ>#4fc3f7<DQ>, <CR>' + 
			'		<DQ>color400<DQ>: <DQ>#29b6f6<DQ>, <CR>' + 
			'		<DQ>color500<DQ>: <DQ>#03a9f4<DQ>, <CR>' + 
			'		<DQ>color600<DQ>: <DQ>#039be5<DQ>, <CR>' + 
			'		<DQ>color700<DQ>: <DQ>#0288d1<DQ>, <CR>' + 
			'		<DQ>color800<DQ>: <DQ>#0277bd<DQ>, <CR>' + 
			'		<DQ>color900<DQ>: <DQ>#01579b<DQ>, <CR>' + 
			'		<DQ>colora100<DQ>: <DQ>#80d8ff<DQ>, <CR>' + 
			'		<DQ>colora200<DQ>: <DQ>#40c4ff<DQ>, <CR>' + 
			'		<DQ>colora400<DQ>: <DQ>#00b0ff<DQ>, <CR>' + 
			'		<DQ>colora700<DQ>: <DQ>#0091ea<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		}
	 },
	Lists: { 
	 },
	i18n: { 
	 },
	Vars: { },
	
	Services: function(in_msg) {
			/**
		* Build a router to parse messages coming to
		* this applications PostBox.
		*
		* version: 5.0
		**/
		switch (in_msg.msg) {
			case 'ping':
				alert("diagnose received ping sent from: " + in_msg.from);
				break;
				
			default:
		}
		
	},
	 Components: {
	
	
	},
	 RegisterFactories: function() {
	
		
		/* CONFIG Component Manager/Factory :
		   
		*/
		FACTORY.Register("Config", function blankFactory() {
			var config = function (config) {
				var self = this;
				var _state = 'local';
		        var _ip = '127.0.0.1:3031';
		      
				self.server = function() {
		          return (_state == 'local') ? 'http://' + _ip + '/widget' : 'https://www.nimble-ide.com/widget';
				};
		      	self.domain = function() {
		          return (_state == 'local') ? 'http://' + _ip : 'https://www.nimble-ide.com';
				};
			};
			config.prototype.type = function () {
				return "config";
			};
			config.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return config;
		});
		
		/* Events Component Manager/Factory :
		   
		*/
		FACTORY.Register("Events", function EventsFactory() {
			var Events = function (config) {
				var self = this;
		     	var $search;
		      
		      	self._config = $fctry.new('Config');
		      	self._shared = {
		          // Attach _shared factories that can be pushed to
				  // other factories via onload() event.
		        };
				
				// Attach all factories to the main parent.
				// Each factory should connect to a UI component's events.
				//
				// self.login = $fctry.new('Login');
		      	// self.header = $fctry.new('Header');
				// ...
				// ..
				// .
		      	self.startSession = function(sessid) {
				  // Trigger this after a user has logged into
				  // the site and created a sessionid.
				  // Login Complete.
		          // - Current sessionID passed as sessid. 
		          // - Current User Details located on USER.acct.
		        };
		      
		        self.main = {
		          activate: function(e, itm) {
		            $f.full('frmmain');
		          },
		          startdiagnostic: function(e, itm) {
		            $phone.diagnose('frmmain', 'results');
		          }
		        };
		      
				self.title = {
		          startup: function(e, itm) {
		            $f.full('frmtitle');
		            $f.load('frmmain');
		            
					setTimeout(function() {
		              $f.unload('frmtitle');
		              $f.show('frmmain');
		              
		              $phone = $fctry.new('Phone');
		            }, 3500);
		            // Initialize and REST calls for the public view
					// of the site/app.
		          },
		          body: {
		            click: function(e, item) {
		              alert('Phone Diagnostic App!');
		            }
		          }
				};
		        for (var mod in self) {
		          if (self[mod].onload) { self[mod].onload(self); }
		        }
			};
			
		  	Events.prototype.type = function () {
				return "Events";
			};
			Events.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return Events;
		});
		
		/* Phone Cordova Manager/Factory :
		   
		*/
		FACTORY.Register("Phone", function PhoneFactory() {
			var Phone = function (config) {
				var self = this;
		      	var _cfg = {};
		      	var smsList = [];
		      
		      	var _fsType = '';
		      	if (typeof(LocalFileSystem) != 'undefined') {
		      		_fsType = LocalFileSystem.PERSISTENT;
		        }
		      	var enable = {};
				var NOTIFY = {
		          DEFAULT_SUCCESS: 'SUCCESS',
		          DEFAULT_ERROR: 'ERROR',
		          
		          MEDIA_SUCCESS: 'MEDIA_SUCCESS',
		          MEDIA_ERROR: 'MEDIA_ERROR',
		          MEDIA_POS_SUCCESS: 'MEDIA_POS_SUCCESS',
		          MEDIA_POS_ERROR: 'MEDIA_POS_ERROR',
		          MEDIA_AMP_SUCCESS: 'MEDIA_AMP_SUCCESS',
		          MEDIA_AMP_ERROR: 'MEDIA_AMP_ERROR',
		          MEDIA_DUR_SUCCESS: 'MEDIA_DUR_SUCCESS',
		          MEDIA_DUR_ERROR: 'MEDIA_DUR_ERROR',
		          MEDIA_INTERVAL: 'MEDIA_INTERVAL',
		          
		          
		          FS_SUCCESS: 'FS_SUCCESS',
		          FS_ERROR: 'FS_ERROR',
		          FS_GETFILE_SUCCESS: 'FS_GETFILE_SUCCESS',
		          FS_GETFILE_ERROR: 'FS_GETFILE_ERROR',
		          FS_STREAM_SUCCESS: 'FS_STREAM_SUCCESS',
		          FS_STREAM_ERROR: 'FS_STREAM_ERROR',
		          FS_EXISTS_SUCCESS: 'FS_EXISTS_SUCCESS',
		          FS_EXISTS_ERROR: 'FS_EXISTS_ERROR',
		          FS_READ_SUCCESS: 'FS_READ_SUCCESS',
		          FS_READ_ERROR: 'FS_READ_ERROR',
		          FS_WRITE_SUCCESS: 'FS_WRITE_SUCCESS',
		          FS_WRITE_ERROR: 'FS_WRITE_ERROR',
		          FS_DELETE_SUCCESS: 'FS_DELETE_SUCCESS',
		          FS_DELETE_ERROR: 'FS_DELETE_ERROR',
		          FS_LIST_SUCCESS: 'FS_LIST_SUCCESS',
		          FS_LIST_ERROR: 'FS_LIST_ERROR',
		          FS_MKDIR_SUCCESS: 'FS_MKDIR_SUCCESS',
		          FS_MKDIR_ERROR: 'FS_MKDIR_ERROR',
		          FS_DELDIR_SUCCESS: 'FS_DELDIR_SUCCESS',
		          FS_DELDIR_ERROR: 'FS_DELDIR_ERROR',
		          FS_DELALL_SUCCESS: 'FS_DELALL_SUCCESS',
		          FS_DELALL_ERROR: 'FS_DELALL_ERROR',
		          
		          GEOLOC_SUCCESS: 'GEOLOC_SUCCESS',
		          GEOLOC_ERROR: 'GEOLOC_ERROR',
		          
		          COMPASS_SUCCESS: 'COMPASS_SUCCESS',
		          COMPASS_ERROR: 'COMPASS_ERROR',
		          
		          MOTION_SUCCESS: 'MOTION_SUCCESS',
		          MOTION_ERROR: 'MOTION_ERROR',
		          
		          GETLIBRARY_SUCCESS: 'GETLIBRARY_SUCCESS',
		          GETLIBRARY_ERROR: 'GETLIBRARY_ERROR',
		          GETALBUM_SUCCESS: 'GETALBUMN_SUCCESS',
		          GETALBUM_ERROR: 'GETALBUMN_ERROR',
		          SAVEIMAGE_SUCCESS: 'SAVEIMAGE_SUCCESS',
		          SAVEIMAGE_ERROR: 'SAVEIMAGE_ERROR',
		          SAVEVIDEO_SUCCESS: 'SAVEVIDEO_SUCCESS',
		          SAVEVIDEO_ERROR: 'SAVEVIDEO_ERROR',
		          
		          CAMERA_SUCCESS: 'CAMERA_SUCCESS',
		          CAMERA_ERROR: 'CAMERA_ERROR',
		          CAMCLENUP_SUCCESS: 'CAMCLEANUP_SUCCESS',
		          CAMCLENUP_ERROR: 'CAMCLEANUP_ERROR',
		          
		          FINDCONTACT_SUCCESS: 'FINDCONTACT_SUCCESS',
		          FINDCONTACT_ERROR: 'FINDCONTACT_ERROR',
		          CREATECONTACT_SUCCESS: 'CREATECONTACT_SUCCESS',
		          CREATECONTACT_ERROR: 'CREATECONTACT_ERROR',
		          PICKCONTACT_SUCCESS: 'PICKCONTACT_SUCCESS',
		          PICKCONTACT_ERROR: 'PICKCONTACT_ERROR',
		          
		          SENDMSGS_SUCCESS: 'SENDMSGS_SUCCESS',
		          SENDMSGS_ERROR: 'SENDMSGS_ERROR',
		          LISTMSGS_SUCCESS: 'LISTMSGS_SUCCESS',
		          LISTMSGS_ERROR: 'LISTMSGS_ERROR',
		          DELETEMSGS_SUCCESS: 'DELETEMSGS_SUCCESS',
		          DELETEMSGS_ERROR: 'DELETEMSGS_ERROR',
		          
		          RESTOREMSGS_SUCCESS: 'RESTOREMSGS_SUCCESS',
		          RESTOREMSGS_ERROR: 'RESTOREMSGS_ERROR',
		          DISABLE_INTERCEPT_SUCCESS: 'DISABLE_INTERCEPT_SUCCESS',
		          DISABLE_INTERCEPT_ERROR: 'DISABLE_INTERCEPT_ERROR',
		          ENABLE_INTERCEPT_SUCCESS: 'ENABLE_INTERCEPT_SUCCESS',
		          ENABLE_INTERCEPT_ERROR: 'ENABLE_INTERCEPT_ERROR',
		          DISABLE_WATCH_SUCCESS: 'DISABLE_WATCH_SUCCESS',
		          DISABLE_WATCH_ERROR: 'DISABLE_WATCH_ERROR',
		          ENABLE_WATCH_SUCCESS: 'ENABLE_WATCH_SUCCESS',
		          ENABLE_WATCH_ERROR: 'ENABLE_WATCH_ERROR'
		        };
		      	var permissions = cordova.plugins.permissions;
		 
		        function checkPermission(perm, onSuccess, stub) {
		          self[stub.type] = self[stub.type] || {};
		          
		          function onFailed(type, methods) {
		            if (methods.length > 0) {
		              methods.forEach(function(itm) {
		                self[type][itm] = function() { };
		              });
		            } else {
		              self[type] = function() { };
		            }
		            self[type]._enabled = false;
		            self[type]._status = 'failed';
		          }
		          function error() {
		            if (!self[stub.type]._enabled) { onFailed(stub.type, stub.methods); }
		          }
		          
		          permissions.checkPermission(perm, function(status) {
		            if (status.hasPermission) {
		              if (!self[stub.type]._enabled) {
		                self[stub.type]._enabled = true;
		                self[stub.type]._status = 'success';
		                onSuccess();
		              }
		            } else permissions.requestPermission(perm, function() {
		              if (!self[stub.type]._enabled) {
		                self[stub.type]._enabled = true;
		                self[stub.type]._status = 'success';
		                onSuccess();
		              }
		            }, error);
		          }, error);
		        }
		      	
		      	self.info = function() {
		          return (device && device.cordova) ? {
		            cordova: device.cordova,
		            model: device.model,
		            platform: device.platform,
		            uuid: device.uuid,
		            version: device.version,
		            sernum: device.serial
		          } : null;
		        };
		      	self.isMobile = function() {
		          return $nim.Agent.isMobile && ($nim.Agent.usingAndroid || $nim.Agent.usingIPad);
		        };
		      	self.Agent = function() {
		          return navigator.userAgent;
		        };
		      	self.Vendor = function() {
		          return navigator.vendor;
		        };
				enable.orientation = function() {
					self.orientation = {
		              get: function() {
		                return screen.orientation.type;
		              },
		              notify: function() {
		                console.log(screen.orientation.type); // e.g. portrait
		              }
					};
					window.addEventListener("orientationchange", self.orientation.notfy);
				};
				enable.battery = function() {
		          if (!self.battery) {
					self.battery = {
		              	_status: '',
		              	get: function() {
		                  return self.battery._status;
		                },
						notify: function(msg, status) {
		                  	self.battery._status = {msg: msg, status: status};
							console.log(msg);
							console.log(JSON.stringify(status));
						}
					};
					window.addEventListener("batterystatus", function(status) {
						self.battery.notify('battery status', status);
					}, false);
					window.addEventListener("batterylow", function(status) {
						self.battery.notify('battery low', status);
					}, false);
					window.addEventListener("batterycritical", function(status) {
						self.battery.notify('battery critical', status);
					}, false);
		          }
				};
				enable.device = function() {
					self.device = {
						// key: model | platform | uuid | version | manufacturer |
						//      isVirtual | isiOSAppOnMac | serial
						get: function(key) {
							return (device && device[key]) ? device[key] : '';
						}
					};
				};
				enable.compass = function() {
					var compID;
		          
		          	if (navigator.compass) {
		              self.compass = {
		                  _status: '',
		                  get: function() {
		                    return self.compass._status;
		                  },
		                  notify: function(heading) {
		                    self.compass._status = heading;
		                    console.log('Heading: ' + heading.magneticHeading);
		                  },
		                  getHeading: function(fn) {
		                    navigator.compass.getCurrentHeading(function(heading) {
		                      self.compass.notify(heading);
		                      if (fn) fn(NOTIFY.COMPASS_SUCCESS, heading);
		                    }, self.compass.error);
		                  },
		                  error: function(errMsg) {
		                    console.log(NOTIFY.COMPASS_ERROR);
		                    console.log(errMsg);
		                  },
		                  start: function() {
		                      watchID = navigator.compass.watchHeading(
		                          self.compass.notify, 
		                          self.compass.error,
		                          {frequency: 3000});
		                  },
		                  stop: function() {
		                      navigator.compass.clearWatch(compID);
		                  }
		              };
		            }
				};
				enable.motion = function() {
		          if (navigator.accelerometer) {
					self.motion = {
		                _status: '',
		              	get: function() {
		                    return self.motion._status;
		                },
						notify: function(acceleration) {
		                  self.motion._status = acceleration;
		                  console.log('Acceleration X: ' + acceleration.x + '\n' +
		                              'Acceleration Y: ' + acceleration.y + '\n' +
		                              'Acceleration Z: ' + acceleration.z + '\n' +
		                              'Timestamp: '      + acceleration.timestamp + '\n');
						},
						getMotion: function(fn) {
							navigator.accelerometer.getCurrentAcceleration(function(acceleration) {
		                      self.motion.notify(acceleration);
		                      if (fn) fn(NOTIFY.MOTION_SUCCESS, acceleration);
		                    }, self.motion.error);
						},
						error: function() {
							console.log(NOTIFY.MOTION_ERROR);
						},
						start: function() {
							watchID = navigator.accelerometer.watchAcceleration(
								self.motion.notify, 
								self.motion.error,
								{frequency: 3000});
						},
						stop: function() {
							navigator.accelerometer.clearWatch(compID);
						}
					};
		          }
				};
				
				enable.globalize = function() {
		          if (navigator.globalization) {
					self.globalize = {
						notify: function(success, res) {
							console.log('response:' + success);
							console.log('  result:' + res);
						},
						getLanguage: function() {
							navigator.globalization.getPreferredLanguage(function(lang) {
								self.globalize.notify(true, lang);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						getCurrency: function(curCode) {
							navigator.globalization.getCurrencyPattern(curCode, function(pattern) {
								self.globalize.notify(true, pattern);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						getLocaleName: function() {
							navigator.globalization.getLocaleName(function(locale) {
								self.globalize.notify(true, local);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						stringToDate: function(str, options) { // {formatLength:'short', selector:'date and time'}
							navigator.globalization.stringToDate(str, function(date) {
								self.globalize.notify(true, date);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						stringToNumber: function(str, options) { // { type: 'decimal' }
							navigator.globalization.stringToDate(str, function(num) {
								self.globalize.notify(true, num);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						dateToString: function(date, options) {  // { formatLength: 'short', selector: 'date and time' }
							navigator.globalization.dateToString(date, function(lDate) {
								self.globalize.notify(true, lDate);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						numberToString: function(num, options) { // { type: 'decimal' }
							navigator.globalization.numberToString(num, function(number) {
								self.globalize.notify(true, number);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						getDateNames: function(options) { // { type: 'wide', item: 'months' }
							navigator.globalization.getDateNames(function(names) {
								self.globalize.notify(true, names);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						getDatePattern: function(options) { // { formatLength: 'short', selector: 'date and time' }
							navigator.globalization.getDatePattern(function(date) {
								self.globalize.notify(true, date);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						getFirstDayOfWeek: function() {
							navigator.globalization.getFirstDayOfWeek(function(day) {
								self.globalize.notify(true, day);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						getNumberPattern: function(options) { // {type: 'decimal'}
							navigator.globalization.getNumberPattern(function(pattern) {
								self.globalize.notify(true, pattern);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						isDayLightSavingsTime: function(date) {
							navigator.globalization.isDayLightSavingsTime(date, function(date) {
								self.globalize.notify(true, date);
							}, function() {
								self.globalize.notify(false, null);
							});
						}
					};
		          }
				};
				enable.network = function() {
		          if (!self.network) {
					self.network = {
						state: '',
		                get: function() {
		                  return self.network.state;
		                },
						notify: function(msg) {
							console.log('Network Type  :' + self.network.state);
							console.log('Network Status:' + msg);
						},
						update: function() {
							var networkState = navigator.connection.type;
							var states = {};
							
							if (typeof(Connection) == 'object') {
								states[Connection.UNKNOWN]  = 'Unknown';
								states[Connection.ETHERNET] = 'Ethernet';
								states[Connection.WIFI]     = 'WiFi';
								states[Connection.CELL_2G]  = 'Cell 2G';
								states[Connection.CELL_3G]  = 'Cell 3G';
								states[Connection.CELL_4G]  = 'Cell 4G';
								states[Connection.CELL]     = 'Cell generic';
								states[Connection.NONE]     = 'No network';
							}
							
							self.network.state = states[networkState] || 'Unknown';
						}
					};
					
					document.addEventListener("offline", function() {
						self.network.notify('offline');
					}, false);
					document.addEventListener("online", function() {
						self.network.notify('online');
					}, false);
		          }
				};
				enable.browser = function() {
		          if (cordova.InAppBrowser) {
					self.browser = {
						open: cordova.InAppBrowser.open
					};
		          }
				};
				enable.statusbar = function() {
		          if (typeof(StatusBar) == 'object') {
					self.statusbar = {
						get: function() {
							return StatusBar;
						},
						hide: StatusBar.hide,
						show: StatusBar.show
					};
		          }
				};
				
		      	var _vibrate = {
		          play: function(dur) {
		            if (navigator.vibrate) navigator.vibrate(dur);
		          }
		        };
		        enable.vibrate = function() {
		          checkPermission(permissions.VIBRATE, function() {
		              self.vibrate = Object.assign(self.vibrate, _vibrate);
					}, {type: 'vibrate', methods: Object.keys(_vibrate)});
		        };
		      
		        var _contacts = {
		            create: function(obj, fn) {
		              var myContact;
		              // {"displayName": "Test User"}
		              if (navigator.contacts) {
		                try {
		                  myContact = navigator.contacts.create(obj);
		                  if (_cfg.notify) _cfg.notify(NOTIFY.CREATECONTACT_SUCCESS, myContact);
		                  if (fn) fn(NOTIFY.CREATECONTACT_SUCCESS, myContact);
		                } catch(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.CREATECONTACT_ERROR);
		                  if (fn) fn(NOTIFY.CREATECONTACT_ERROR);
		                }
		              }
		            },
		            find: function(filter, fields, fn) {
		              if (navigator.contacts) {
		                // find all contacts with 'Bob' in any name field
		                // var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
		                var options      = new ContactFindOptions();
		                options.filter   = filter;
		                options.multiple = true;
		                options.desiredFields = [ fields[0] || navigator.contacts.fieldType.id ];
		                options.hasPhoneNumber = true;
		                navigator.contacts.find(fields, function(contacts) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.FINDCONTACT_SUCCESS, contacts);
		                  if (fn) fn(NOTIFY.FINDCONTACT_SUCCESS, contacts);
		                }, function(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.FINDCONTACT_ERROR, err);
		                  if (fn) fn(NOTIFY.FINDCONTACT_ERROR, err);
		                }, options);
		              }
		            },
		            pickContact: function(fn) {
		              if (navigator.contacts) {
		                navigator.contacts.pickContact(function(contact) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.PICKCONTACT_SUCCESS, contact);
		                  if (fn) fn(NOTIFY.PICKCONTACT_SUCCESS, contact);
		                },function(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.PICKCONTACT_ERROR, err);
		                  if (fn) fn(NOTIFY.PICKCONTACT_ERROR, err);
		                });
		              }
		            }
		        };
		      	enable.contacts = function() {
					checkPermission(permissions.GET_ACCOUNTS, function() {
					  checkPermission(permissions.READ_CONTACTS, function() {
						checkPermission(permissions.WRITE_CONTACTS, function() { 
						  self.contacts = Object.assign(self.contacts, _contacts);
						}, {type: 'contacts', methods: Object.keys(_contacts)});
					  }, {type: 'contacts', methods: Object.keys(_contacts)});
					}, {type: 'contacts', methods: Object.keys(_contacts)});
				};
		      
		      	/*
		        	CORDOVA App Folder:
		            cordova.file.applicationDirectory
		            
		        	FILE SYSTEM Types:
		            - window.TEMPORARY
		            = LocalFileSystem.PERSISTENT
		        */
		        var _files = {
		            type: function(type) {
		              if (type) {
		                _fsType = type;
		              } else {
		                return _fsType;
		              }
		            },
		            exists: function(file, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {create: false}, function(fileEntry) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_EXISTS_SUCCESS, true);
		                    if (fn) fn(NOTIFY.FS_EXISTS_SUCCESS, true);
		                  }, function(err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_EXISTS_ERROR, false);
		                    if (fn) fn(NOTIFY.FS_EXISTS_ERROR, false);
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.FS_ERROR, err);
		                  if (fn) fn(NOTIFY.FS_ERROR, err);
		               }
		            },
		          	path: function(key) {
		              switch (key.toLowerCase()) {
		                case 'app':
		                  return cordova.file.applicationDirectory;
		                  
		                case 'store':
		                  return cordova.file.applicationStorageDirectory;
		 
		                case 'temp':
		                  return cordova.file.tempDirectory || cordova.file.applicationDirectory + 'temp/';
		                  
		                case 'cache':
		                  return cordova.file.cacheDirectory;
		                  
		                case 'docs':
		                  return cordova.file.documentsDirectory || cordova.file.applicationDirectory + 'docs/';
		                  
		                case 'shared':
		                  return cordova.file.sharedDirectory || cordova.file.applicationDirectory + 'shared/';
		                  
		                case 'sync':
		                  return cordova.file.syncedDataDirectory || cordova.file.applicationDirectory + 'sync/';
		                  
		                default:
		                  return cordova.file.tempDirectory || cordova.file.applicationDirectory + 'temp/';
		              }
		            },
		            list: function(path, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  var reader = fileSystem.createReader();
		                  reader.readEntries(
		                    function (entries) {
		                      if (_cfg.notify) _cfg.notify(NOTIFY.FS_LIST_SUCCESS, entries);
		                      if (fn) fn(NOTIFY.FS_LIST_SUCCESS, entries);
		                    },
		                    function (err) {
		                      if (_cfg.notify) _cfg.notify(NOTIFY.FS_LIST_ERROR, err);
		                      if (fn) fn(NOTIFY.FS_LIST_ERROR, err);
		                    }
		                  );
		               }
		               function fsError(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.FS_ERROR, err);
		                  if (fn) fn(NOTIFY.FS_ERROR, err);
		               }
		            },
		            delDir: function(folder, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getDirectory(folder, {create: false, exclusive: false}, function(parent) {
		                    parent.remove(function() {
		                      if (_cfg.notify) _cfg.notify(NOTIFY.FS_DELDIR_SUCCESS, true);
		                      if (fn) fn(NOTIFY.FS_DELDIR_SUCCESS, true);
		                    }, function() {
		                      if (_cfg.notify) _cfg.notify(NOTIFY.FS_DELDIR_ERROR, false);
		                      if (fn) fn(NOTIFY.FS_DELDIR_ERROR, false);
		                    });
		                  }, function(err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_DELDIR_ERROR, false);
		                    if (fn) fn(NOTIFY.FS_DELDIR_ERROR, false);
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.FS_ERROR, err);
		                  if (fn) fn(NOTIFY.FS_ERROR, err);
		               }
		            },
		            makeDir: function(folder, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  folder = folder || fs.root;
		                  folder.getDirectory(folder, {create: true, exclusive: false}, function(parent) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_MKDIR_SUCCESS, parent);
		                    if (fn) fn(NOTIFY.FS_MKDIR_SUCCESS, parent);
		                  }, function(err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_MKDIR_ERROR, false);
		                    if (fn) fn(NOTIFY.FS_MKDIR_ERROR, false);
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.FS_ERROR, err);
		                  if (fn) fn(NOTIFY.FS_ERROR, err);
		               }
		            },
		            read: function(file, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {}, function(fileEntry) {
		                     fileEntry.file(function(fileHnd) {
		                        var reader = new FileReader();
		                        reader.onloadend = function(e) {
		                           if (_cfg.notify) _cfg.notify(NOTIFY.FS_READ_SUCCESS, this.result);
		                           if (fn) fn(NOTIFY.FS_READ_SUCCESS, this.result);
		                        };
		                        reader.readAsText(fileHnd);
		                     }, function(err) {
		                       if (_cfg.notify) _cfg.notify(NOTIFY.FS_STREAM_ERROR, err);
		                       if (fn) fn(NOTIFY.FS_STREAM_ERROR, err);
		                     });
		                  }, function(err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_GETFILE_ERROR, err);
		                    if (fn) fn(NOTIFY.FS_GETFILE_ERROR, err);
		                  });
		               }
		               function fsError(err) {
		                 if (_cfg.notify) _cfg.notify(NOTIFY.FS_ERROR, err);
		                 if (fn) fn(NOTIFY.FS_ERROR, err);
		               }
		            },
		            write: function(file, data, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {create: true}, function(fileEntry) {
		                     fileEntry.createWriter(function(fileWriter) {
		                        fileWriter.onwriteend = function(e) {
		                           if (_cfg.notify) _cfg.notify(NOTIFY.FS_WRITE_SUCCESS, e);
		                           if (fn) fn(NOTIFY.FS_WRITE_SUCCESS, e);
		                        };
		                        fileWriter.onerror = function(e) {
		                           if (_cfg.notify) _cfg.notify(NOTIFY.FS_WRITE_ERROR, e);
		                           if (fn) fn(NOTIFY.FS_WRITE_ERROR, e);
		                        };
		                        var blob = new Blob([data], {type: 'text/plain'});
		                        fileWriter.write(blob);
		                     }, function(err) {
		                       if (_cfg.notify) _cfg.notify(NOTIFY.FS_STREAM_ERROR, err);
		                       if (fn) fn(NOTIFY.FS_STREAM_ERROR, err);
		                     });
		                  }, function(err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_GETFILE_ERROR, err);
		                    if (fn) fn(NOTIFY.FS_GETFILE_ERROR, err);
		                  });
		               }
		               function fsError(err) {
		                 if (_cfg.notify) _cfg.notify(NOTIFY.FS_ERROR, err);
		                 if (fn) fn(NOTIFY.FS_ERROR, err);
		               }
		            },
		            delete: function(file, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {create: false}, function(fileEntry) {
		                     fileEntry.remove(function() {
		                       if (_cfg.notify) _cfg.notify(NOTIFY.FS_DELETE_SUCCESS, true);
		                       if (fn) fn(NOTIFY.FS_DELETE_SUCCESS, true);
		                     }, function(err) {
		                       if (_cfg.notify) _cfg.notify(NOTIFY.FS_DELETE_ERROR, err);
		                       if (fn) fn(NOTIFY.FS_DELETE_ERROR, err);
		                     });
		                  }, function(err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_GETFILE_ERROR, err);
		                    if (fn) fn(NOTIFY.FS_GETFILE_ERROR, err);
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.FS_ERROR, err);
		                  if (fn) fn(NOTIFY.FS_ERROR, err);
		               }
		            },
		            deleteAll: function(path, fn) {
		              self.files.list(path, function(status, items) {
		                if (status == NOTIFY.FS_LIST_SUCCESS) {
		                  items.forEach(function(item) {
		                    self.files.delete(path + item);
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_DELALL_SUCCESS, true);
		                    if (fn) fn(NOTIFY.FS_DELALL_SUCCESS, true);
		                  });
		                }
		              });
		            }
		        };
		      	enable.files = function() {
					checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
					  self.files = Object.assign(self.files, _files);
					}, {type: 'files', methods: Object.keys(_files)});
				};
		        var _media = {
		            init: function(src, fn) {
		              return new Media(src, function() {
		                   if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_SUCCESS, true);
		                   if (fn) fn(NOTIFY.MEDIA_SUCCESS, true);
		              }, function(err) {
		                   if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_ERROR, err);
		                   if (fn) fn(NOTIFY.MEDIA_ERROR, err);
		              });
		            },
		            watch: function(dur, fn) {
		              var counter = 0;
		              return setInterval(function() {
		                counter += dur;
		                if (fn) fn(NOTIFY.MEDIA_INTERVAL, counter);
		              }, dur);
		            },
		            clear: function(watchId) {
		              clearInterval(watchId);
		            },
		            pos: function() {},
		            duration: function() {},
		            getCurrentAmplitude: function(media, fn) {
		              media.getCurrentAmplitude(
		                function (pct) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_AMP_SUCCESS, pct);
		                  if (fn) fn(NOTIFY.MEDIA_AMP_SUCCESS, pct);
		                },
		                function (err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_AMP_ERROR, err);
		                  if (fn) fn(NOTIFY.MEDIA_AMP_ERROR, err);
		                }
		              );
		            },
		            getCurrentPosition: function(media, fn) {
		              media.getCurrentPosition(
		                function (pos) {
		                  if (pos > -1) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_POS_SUCCESS, pos);
		                    if (fn) fn(NOTIFY.MEDIA_POS_SUCCESS, pos);
		                  }
		                },
		                function (err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_POS_ERROR, err);
		                  if (fn) fn(NOTIFY.MEDIA_POS_ERROR, err);
		                }
		              );
		            },
		            getDuration: function(media, fn) {
		              var counter = 0;
		              var timerDur = setInterval(function() {
		                  counter = counter + 100;
		                  if (counter > 2000) {
		                      clearInterval(timerDur);
		                      if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_DUR_ERROR, err);
		                      if (fn) fn(NOTIFY.MEDIA_DUR_ERROR, err);
		                  }
		                  var dur = media.getDuration();
		                  if (dur > 0) {
		                      clearInterval(timerDur);
		                      if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_DUR_SUCCESS, dur);
		                      if (fn) fn(NOTIFY.MEDIA_DUR_SUCCESS, dur);
		                  }
		              }, 100);
		            },
		            play: function(media) {
		              media.play();
		            },
		            pause: function(media) {
		              media.pause();
		            },
		            pauseRecord: function(media) {
		              media.pauseRecord();
		            },
		            release: function(media) {
		              media.release();
		            },
		            resumeRecord: function(media) {
		              media.resumeRecord();
		            },
		            startRecord: function(media) {
		              media.startRecord();
		            },
		            stopRecord: function(media) {
		              media.stopRecord();
		            },
		            stop: function(media) {
		              media.stop();
		            },
		            seekTo: function(media, pos) {
		              // pos in milliseconds. 1 sec = 1000
		              media.seekTo(pos);
		            },
		            setVolume: function(media, vol) {
		              // vol is string from '0.0' to '1.0'
		              media.setVolume(vol);
		            },
		            setRate: function(media, speed) {
		              // Playback speed is number from 0.1 - 4.0; (unknown range)
		              media.setRate(speed);
		            }
		        };
		      	enable.media = function() {
					checkPermission(permissions.READ_AUDIO, function() { 
					  checkPermission(permissions.MODIFY_AUDIO_SETTINGS, function() { 
						checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
						  self.media = Object.assign(self.media, _media);
						}, {type: 'media', methods: Object.keys(_media)});
					  }, {type: 'media', methods: Object.keys(_media)});
					}, {type: 'media', methods: Object.keys(_media)});
				};
		        var _geo = {
		            get: function(opts, fn) {
		                var options = opts || {
		                  enableHighAccuracy: true,
		                  maximumAge: 3600000
		                };
		                if (navigator.geolocation) {
		                 navigator.geolocation.getCurrentPosition(function(pos) {
		                   if (_cfg.notify) _cfg.notify(NOTIFY.GEOLOC_SUCCESS, pos);
		                   if (fn) fn(NOTIFY.GEOLOC_SUCCESS, pos);
		                 }, function(err) {
		                   if (_cfg.notify) _cfg.notify(NOTIFY.GEOLOC_ERROR, err);
		                   if (fn) fn(NOTIFY.GEOLOC_ERROR, err);
		                 }, options);
		                }
		            },
		            watch: function(opts, fn) {
		               var options = opts || {
		                  maximumAge: 3600000,
		                  timeout: 3000,
		                  enableHighAccuracy: true,
		               };
		               if (navigator.geolocation) {
		                 var watchID = navigator.geolocation.watchPosition(function(pos) {
		                   if (_cfg.notify) _cfg.notify(NOTIFY.GEOLOC_SUCCESS, pos);
		                   if (fn) fn(NOTIFY.GEOLOC_SUCCESS, pos);
		                 }, function(err) {
		                   if (_cfg.notify) _cfg.notify(NOTIFY.GEOLOC_ERROR, err);
		                   if (fn) fn(NOTIFY.GEOLOC_ERROR, err);
		                 }, options);
		                 return watchID;
		               }
		            },
		            clear: function(watchId) {
		              if (navigator.geolocation) navigator.geolocation.clearWatch(watchId);
		            }
		        };
		      	enable.geo = function() {
					checkPermission(permissions.ACCESS_COARSE_LOCATION, function() {
					  checkPermission(permissions.ACCESS_FINE_LOCATION, function() {
						checkPermission(permissions.ACCESS_LOCATION_EXTRA_COMMANDS, function() {
						  self.geo = Object.assign(self.geo, _geo);
						}, {type: 'geo', methods: Object.keys(_geo)});
					  }, {type: 'geo', methods: Object.keys(_geo)});
					}, {type: 'geo', methods: Object.keys(_geo)});
				};
		        var _gallery = {
		          	getThumbnail: function(libItm, fn) { // or LibItm.id
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getThumbnail(libItm, function (libItm) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.DEFAULT_SUCCESS, libItm);
		                  if (fn) fn(NOTIFY.DEFAULT_SUCCESS, libItm);
		                }, function (err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.DEFAULT_ERROR, err);
		                  if (fn) fn(NOTIFY.DEFAULT_ERROR, err);
		                });
		              }
		            },
		          	getPhoto: function(libItm, fn) { // or LibItm.id
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getPhoto(libItm, function (libItm) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.DEFAULT_SUCCESS, libItm);
		                  if (fn) fn(NOTIFY.DEFAULT_SUCCESS, libItm);
		                }, function (err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.DEFAULT_ERROR, err);
		                  if (fn) fn(NOTIFY.DEFAULT_ERROR, err);
		                });
		              }
		            },
		            saveImage: function(album, url, fn) {
		              album = album || App.ProductName;
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.saveImage(url, album, function (libItm) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.SAVEIMAGE_SUCCESS, libItm);
		                  if (fn) fn(NOTIFY.SAVEIMAGE_SUCCESS, libItm);
		                }, function (err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.SAVEIMAGE_ERROR, err);
		                  if (fn) fn(NOTIFY.SAVEIMAGE_ERROR, err);
		                });
		              }
		            },
		          	saveVideo: function(album, url, fn) {
		              album = album || App.ProductName;
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.saveVideo(url, album, function (libItm) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.SAVEVIDEO_SUCCESS, libItm);
		                  if (fn) fn(NOTIFY.SAVEVIDEO_SUCCESS, libItm);
		                }, function (err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.SAVEVIDEO_ERROR, err);
		                  if (fn) fn(NOTIFY.SAVEVIDEO_ERROR, err);
		                });
		              }
		            },
		            getlibrary: function(options, fn) {
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getLibrary(
		                  function (result) {
		                    var library = result.library;
		                    // Send array of library objects to notify.
		                    if (_cfg.notify) _cfg.notify(NOTIFY.GETLIBRARY_SUCCESS, library);
		                    if (fn) fn(NOTIFY.GETLIBRARY_SUCCESS, library);
		                  },
		                  function (err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.GETLIBRARY_ERROR, err);
		                    if (fn) fn(NOTIFY.GETLIBRARY_ERROR, err);
		                  },
		                  options || { // optional options
		                    thumbnailWidth: 512,
		                    thumbnailHeight: 384,
		                    quality: 0.8,
		                    includeAlbumData: false // default
		                  }
		                );
		              }
		            },
		            getalbum: function(fn) {
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getAlbums(
		                  function (albums) {
		                    // Send an array of almbuns to notify.
		                    if (_cfg.notify) _cfg.notify(NOTIFY.GETALBUM_SUCCESS, albums);
		                    if (fn) fn(NOTIFY.GETALBUM_SUCCESS, albums);
		                  }, 
		                  function (err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.GETALBUM_ERROR, err);
		                    if (fn) fn(NOTIFY.GETALBUM_ERROR, err);
		                  }
		                );
		              }
		            }
		        };
		        enable.gallery = function() {
		          checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
					self.gallery = Object.assign(self.gallery, _gallery);
				  }, {type: 'gallery', methods: Object.keys(_gallery)});
		        };
		      
		      	var _camera = {
		            getpicture: function(options, fn) {
		              if (navigator.camera) {
		                navigator.camera.getPicture(function(imgURI) {
		                  // var image = document.getElementById('myImage');
		                  // image.src = imageURI;
		                  if (_cfg.notify) _cfg.notify(NOTIFY.CAMERA_SUCCESS, imgURI);
		                  if (fn) fn(NOTIFY.CAMERA_SUCCESS, imgURI);
		                }, function(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.CAMERA_ERROR, err);
		                  if (fn) fn(NOTIFY.CAMERA_ERROR, err);
		                }, options);
		              }
		            },
		            cleanup: function(fn) {
		              if (navigator.camera) {
		                navigator.camera.cleanup(function() {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.CAMCLEANUP_SUCCESS);
		                  if (fn) fn(NOTIFY.CAMCLEANUP_SUCCESS);
		                }, function(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.CAMCLEANUP_ERROR, err);
		                  if (fn) fn(NOTIFY.CAMCLEANUP_ERROR, err);
		                });
		              }
		            },
		            options: function(quality, srcType) {
		              var options;
		              if (Camera) {
		                options = {
		                    // Some common settings are 20, 50, and 100
		                    // srcType = Camera.PictureSourceType.CAMERA
		                    quality: quality,
		                    destinationType: Camera.DestinationType.FILE_URI,
		                    // In this app, dynamically set the picture source, Camera or photo gallery
		                    sourceType: srcType,
		                    encodingType: Camera.EncodingType.JPEG,
		                    mediaType: Camera.MediaType.PICTURE,
		                    allowEdit: true,
		                    correctOrientation: true
		                };
		              }
		              return options || null;
		            }
		        };
		        enable.camera = function() {
					checkPermission(permissions.CAMERA, function() {
					  checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
						self.camera = Object.assign(self.camera, _camera);
					  }, {type: 'camera', methods: Object.keys(_camera)});
					}, {type: 'camera', methods: Object.keys(_camera)});
				};
		      	// USES: cordova-sms-plugin
		        var _sms = {
					watch: function(fn) {
		              if (window.SMS) SMS.startWatch(function() {
		                if (_cfg.notify) _cfg.notify(NOTIFY.ENABLE_WATCH_SUCCESS);
						if (fn) fn(NOTIFY.ENABLE_WATCH_SUCCESS);
		              }, function() {
		                if (_cfg.notify) _cfg.notify(NOTIFY.ENABLE_WATCH_ERROR);
						if (fn) fn(NOTIFY.ENABLE_WATCH_ERROR);
		              });
					},
					intercept: function(fn) {
		              if (window.SMS) SMS.enableIntercept(true, function() {
		                if (_cfg.notify) _cfg.notify(NOTIFY.ENABLE_INTERCEPT_SUCCESS);
						if (fn) fn(NOTIFY.ENABLE_INTERCEPT_SUCCESS);
		              }, function() {
						if (_cfg.notify) _cfg.notify(NOTIFY.ENABLE_INTERCEPT_ERROR);
						if (fn) fn(NOTIFY.ENABLE_INTERCEPT_ERROR);
		              });
					},
		            send: function (addr, msg, fn) {
		              if (window.SMS) { 
		                SMS.sendSMS(addr, msg, function() {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.SENDMSGS_SUCCESS);
		                  if (fn) fn(NOTIFY.SENDMSGS_SUCCESS);
		                }, function(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.SENDMSGS_ERROR, err);
		                  if (fn) fn(NOTIFY.SENDMSGS_ERROR, err);
		                });
		              } else { alert('SMS is not loaded!'); }
		            },
		            delete: function(filter, fn) {
		              if (window.SMS) SMS.deleteSMS(filter, function( n ) {
		                if (_cfg.notify) _cfg.notify(NOTIFY.DELETEMSGS_SUCCESS, n);
		                if (fn) fn(NOTIFY.DELETEMSGS_SUCCESS, n);
		              }, function(err) {
		                if (_cfg.notify) _cfg.notify(NOTIFY.DELETEMSGS_ERROR, err);
		                if (fn) fn(NOTIFY.DELETEMSGS_ERROR, err);
		              });
		            },
		            list: function(filter, fn) {
		              if (window.SMS) SMS.listSMS(filter, function(data) {
		                // NOTE: data is an array of messages.
		                if (_cfg.notify) _cfg.notify(NOTIFY.LISTMSGS_SUCCESS, data);
		                if (fn) fn(NOTIFY.LISTMSGS_SUCCESS, data);
		              }, function(err) {
		                if (_cfg.notify) _cfg.notify(NOTIFY.LISTMSGS_ERROR, err);
		                if (fn) fn(NOTIFY.LISTMSGS_ERROR, err);
		              });
		            },
		            options: function(options) {
		              if (window.SMS) SMS.setOptions(options);
		            }
		        };
				enable.sms = function() {
		          if (!self.sms) self.sms = {};
		          function requestSMSPermission() {
		            var success = function (hasPermission) { 
		              if (!hasPermission) {
		                sms.requestPermission(function() {
		                  console.log('[OK] Permission accepted');
		                  proceed(true);
		                }, function(error) {
		                  console.info('[WARN] Permission not accepted');
		                  // Handle permission not accepted
		                });
		              }
		            };
		            var error = function (e) { alert('Something went wrong:' + e); };
		            sms.hasPermission(success, error);
		          }
		          function error(err) {
		            alert('Something went wrong:' + e);
		          }
		          function proceed(hasPermission) {
		            if (hasPermission) {
		              self.sms.createSms = function(number, msg, opts, cbk) {
		                sms.send(number, msg, opts, function() {
		                  self.sms._enabled = true;
		                  self.sms._status = 'success';
		                  if (cbk) { cbk(true, 'ok'); }
		                }, function(e) {
		                  if (cbk) { cbk(false, e); }
		                });
		              };
		            } else {
		              requestSMSPermission();
		            }
		          }
		          if (typeof(sms) == 'object') {
		          	sms.hasPermission(proceed, error);
		        	}
		        };
		      	enable.SMS = function() {
		          if (!self.sms) self.sms = {};
		          
		          function onMsg(e) {
		          }
		          function success(action, result, objAry) {
		            // #id = message id for delete
		            // #num = # of messages for restore
		            // true, ary = array for list
		            // t/f for intercept (on/Off)
		            // t/f for send message
		            // t/f for watch messages
		            
		            switch (action) {
		              case 'delete':
		                var idx = smsList.find(function(it) { return it._id == objAry._id; });
		                if (idx > -1) smsList.splice(idx, 1);
		                break;
		                
		              case 'onmsg':
		                smsList.push(result.data);
		                break;
		                
		              case 'list':
		                if (result) {
		                  for (var i in objAry) {
		                    smsList.push(data[i]);
		                  }
		                }
		                break;
		            }
		          }
		          function failed(err) {
		            console.log('Error:');
		            console.log(err);
		          }
		          
		          if (typeof(SMS) == 'object') {
		            self.sms.notify = onMsg;
		            self.sms.sendSms = function(sendto, msg) {
		              if(sendto.indexOf(";") >= 0) {
		                  sendto = sendto.split(";");
		                  for (var i in sendto) {
		                      sendto[i] = sendto[i].trim();
		                  }
		              }
		              SMS.sendSMS(sendto, msg, function() {
		                success('send', true);
		              }, failed);
		            };
		            self.sms.listSms = function(filter) {
		              SMS.listSMS(filter || {}, function(data) {
		                success('list', Array.isArray(data), data);
		              }, failed);
		            };
		            self.sms.deleteSms = function(ary) {
		              ary.forEach(function(sms) {
		                SMS.deleteSMS({_id: sms["_id"]}, function(id) {
		                  success('delete', id, sms);
		                }, failed);
		              });
		            };
		            self.sms.startWatch = function() {
		              SMS.startWatch(function() {
		                success('watch', true);
		              }, failed);
		            };
		            self.sms.stopWatch = function() {
		              SMS.stopWatch(function() {
		                success('watch', false);
		              }, failed);
		            };
		            self.sms.enableIntercept = function(blOnOff) {
		              if (blOnOff) {
		                smsList.length = 0;
		              }
		              SMS.enableIntercept(blOnOff, function() {
		                success('intercept', blOnOff);
		              }, failed);
		            };
		            self.sms.restoreSms = function(msgs) {
		              smsList.length = 0;
		              SMS.restoreSMS(smsList, function(num) {
		                success('restore', num);
		              }, failed);
		            };
		            self.sms.setOptions = function(options) {
		            };
		            document.addEventListener('onSMSArrive', function(e) {
		              success('onmsg', e);
		          });
		          }
		        };
		        var _notify = {
		          	vibrate: function(dur) {
		              if (navigator.notification.vibrate) navigator.notification.vibrate(dur);
		            },
		          	beep: function(times) {
		              if (navigator.notification.beep) navigator.notification.beep(times);
		            },
		            alert: function(msg, cllbk, title, button) {
		              if (navigator.notification.alert) navigator.notification.alert(msg, cllbk, title, button);
		            },
		            confirm: function(msg, cllbk, title, button) {
		              if (navigator.notification.confirm) navigator.notification.confirm(msg, cllbk, title, button);
		            }
		        };
		        enable.notify = function() {
					checkPermission(permissions.POST_NOTIFICATIONS, function() {
					  self.notify = Object.assign(self.notify, _notify);
					}, {type: 'notify', methods: Object.keys(_notify)});
				};
		      	self.init = function(parms) {
		          _cfg = parms;
		          var plgn = _cfg.plugins || [];
				  
		          // Global Phone Listener/Callback.
		          // parms = {
		          //     plugins: ['sms', 'contact', 'notify'],
		          //     notify: function(result, data) {}
		          // }
		          //
				  // List of plugins to enable.
				  // parms.plugins = ['sms', 'contact', 'notify']
				  // check and enable permissions for each plugin group.
				  plgn.forEach(function(itm) {
					  if (enable && enable[itm] && (typeof(self[itm]) == 'undefined' ||
		                  typeof(self[itm]._status) == 'undefined')) enable[itm]();
				  });
				  
				};
		      	self.destroy = function() {
		          if (SMS) {
		            if (_cfg.watch) {
		              SMS.stopWatch(function() {
		                if (_cfg.notify) _cfg.notify(NOTIFY.DISABLE_WATCH_SUCCESS);
		              }, function() {
		                if (_cfg.notify) _cfg.notify(NOTIFY.DISABLE_WATCH_ERROR);
		              });
		            }
		            
		            if (_cfg.intercept) {
		              SMS.enableIntercept(false, function() {
		                if (_cfg.notify) _cfg.notify(NOTIFY.DISABLE_INTERCEPT_SUCCESS);
		              }, function() {
		                if (_cfg.notify) _cfg.notify(NOTIFY.DISABLE_INTERCEPT_ERROR);
		              });
		              SMS.restoreSMS(smsList, function( n ) {
		                smsList.length = 0;
		                if (_cfg.notify) _cfg.notify(NOTIFY.RESTOREMSGS_SUCCESS, n);
		              }, function(err) {
		                if (_cfg.notify) _cfg.notify(NOTIFY.RESTOREMSGS_ERROR, err);
		              });
		            }
		          }
		        };
		      	// Phone Diagnostic Method.
		        // --------------------------
		      	self.diagnose = function(dlg, ctrl) {
		          var info = '', cnt = 0;
		          
		          function log(out) {
		            if (dlg && ctrl && $f.type(dlg, ctrl) == 'textarea') {
		              cnt++;
		              out = (typeof(out) != 'string') ? JSON.stringify(out) : out;
		              info += out + '\n';
		              
		              $f.text(dlg, ctrl, info);
		            } else {
		              console.log(out);
		            }
		          }
		          
		          // All generic mobile information.
		          //
		          log('\nDEVICE:');
		          ['cordova', 'model', 'platform', 'uuid', 'version', 'serial', 'manufacturer'].forEach(function(it) {
		          	log(it + ' = ' + self.device.get(it));
		          });
		          
		          log('\nAGENT:');
		          log(self.Agent());
		          
		          log('\nVENDOR:');
		          log(self.Vendor());
		          
		          if (self.orientation) {
		            log('\nORIENTATION:');
		            log(self.orientation.get());
		          }
		          
		          if (self.network) {
		            log('\nNETWORK:');
		            self.network.update();
		            log('Network Connection = ' + self.network.get());
		          }
		          
		          if (self.battery) {
		            log('\nBATTERY:');
		            log(self.battery.get());
		          }
		          
		          if (self.compass) {
		            self.compass.getHeading(function(result, data) {
		            	log('\nCOMPASS:');
		            	log(data);
		            });
		          }
		          
		          if (self.motion) {
		            self.motion.getMotion(function(result, data) {
		               	log('\nMOTION:');
		           		log(data);
		            });
		          }
		          
		          if (self.globalize) {
		            log('\nGLOBALIZE:');
		            log('Language = ' + self.globalize.getLanguage());
		            log('LocaleName = ' + self.globalize.getLocaleName());
		          }
		        
		          if (self.statusbar) {
		            log('\nSTATUSBAR:');
		            log(self.statusbar.get());
		          }
		          
		          if (self.vibrate) {
		            log('\nVIBRATE:');
		            log('Vibrate 2 second(s).');
		            self.vibrate.play(2000);
		          }
		          
		          if (self.files) {
		            log('\nFILES:');
		            ['app', 'store', 'temp', 'cache', 'docs', 'shared', 'sync'].forEach(function(itm) {
		              log(' - file.path(' + itm + ') = "' + self.files.path(itm) + '"');
		            });
		            // Write, Read, List, Exists, Delete
		            log('\n1. Write test file "test.txt".');
		            self.files.write('./test.txt', 'This is a test ' + (new Date()).Format('#MM#-#DD#-#YYYY# #hh#:#mm# #AMPM#'), function(msg, res) {
		            if (res) {
		              log('2. Check for wrong file "test.png".');
		              self.files.exists('./test.png', function(msg, res) {
		                if (!res) {
		                  log('3. Test for correct file "test.txt".');
		                  self.files.exists('./test.txt', function(msg, res) {
		                    if (res) {
		                      log('4. Read test file.');
		                      self.files.read('./test.txt', function(msg, res) {
		                        log('\nFILE CONTENT:');
		                        log(res);
		                        
		                        log('\n5. Delete file.');
		                        self.files.delete('./test.txt', function(msg, res) {
		                          if (res) {
		                            log('6. Verify deleted file.');
		                            self.files.exists('./test.txt', function(msg, res) {
		                              if (!res) {
		                                log('\nFILE DELETED! File I/O test completed!');
		                              }
		                            });
		                          }
		                        });
		                      });
		                    }
		                  });
		                }
		              });
		            }
		          });
		          }
		          
		          if (self.geo) {
		            self.geo.get(null, function(result, data) {
		              log('\nGEO:');
		              log({result: result, data: data});
		            });
		          }
		          
		          if (self.media) {
		            log('\nMEDIA:');
		            var media = self.media.init('https://www.nimble-ide.com/media/drums.mp3', function(msg, res) {
		              if (res && media) {
		                log('Playing drums.mp3');
		                self.media.play(media);
		              }
		            });
		          }
		          
		          if (self.notify) {
		            log('\nNOTIFY:');
		            log('Vibrate for 2 secs.');
		            self.notify.vibrate(2);
		            log('Test notification alert.');
		            self.notify.alert('You are a winner', function(idx) {
		              log('Alert has dismissed.');
		            }, "Confirm:", 'Close');
		            log('Test notification confirmation.');
		            self.notify.confirm('Did this popup work?', function(idx) {
		              log('Button ' + idx + ' was pressed.');
		            }, "Confirm:", ['Yes', 'No']);
		          }
		          
		          if (self.gallery) {
		            self.gallery.getLibrary(null, function(result, data) {
		                log('\nGALLERY:');
		                log(' Gallery getLibrary:');
		              	var lib = result.library || [];
		              
		              	lib.forEach(function(itm) {
		                  log(itm);
		                });
		            });
		          }
		          
		          if (self.camera) {
		            log('\nCAMERA:');
		            log(' Camera Enabled: ' + self.camera._status);
		          }
		      
		          // Sms
		        };
		      
				// Attach Phone Features when Device is Ready.
				function onDeviceReady() {
		          // Attach files, vibrate, battery, network & device
		          // by default.
		          enable.files();
		          enable.vibrate();
		          enable.battery();
		          enable.network();
		          if (device.cordova) enable.device();
				}
				document.addEventListener("deviceready", onDeviceReady, false);
			};
			
		  	Phone.prototype.type = function () {
				return "Phone";
			};
			Phone.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return Phone;
		});
			
	},
	Logon: function(instID) {
	 
	},
	Logoff: function(instID) {
	 
	},
	EndApp: function(instID) {
	 
	},
	StartApp: function(pos) {
	    try {
	        $k.enabled = false;
	        if (typeof($k.fluidDesktop) == "undefined") { DESKTOP.fluidDesktop = globals.fluidDesktop; }
	        if (typeof($k.desktop) == "undefined") { $k.desktop = false; }
	        $k.setuplogo();
	 
	        App.Code.RegisterFactories();
	         if ($fctry.exists("Events")) { AppEvents = $fctry.new("Events"); }
	 
	        /* This function is called before your Startup Dialog is shown. 
	           The KERNEL is disabled until the Startup Dialog is displayed. 
			     You CAN NOT manually display dialog(s) here. */
	    }
	    catch (err) {
	        if ($k.errhandler) {
	            $k.errhandler(err, null);
	        }
	    }
	    finally {
	        $k.enabled = true;
	    }
	    return pos;
	}
	
};
$k.wrapallfunctions($heap.diagnose.Code);
 
/** 
 * Create ALL Dialog Instances -------------------------
 **/
 
/** Form Template --------------------------------------
 *  NAME: frmtitle
 *
 * version: 5.0
 **/
$heap.diagnose['frmtitle'] = { };
$heap.diagnose['frmtitle'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'frmtitle';
			if (!$heap.diagnose[pos.form]) { pos.form = 'frmtitle'; }
			
			$k.instance.newform(pos.form, App.Dialog['frmtitle']);
			instName = $heap.diagnose[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'frmtitle'}});
			}
		}
		finally {
			if (show) { $heap.diagnose[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null | globals.DlgStyles.shadow | globals.DlgStyles.dragable | globals.DlgStyles.sizable );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'480', height:'640'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('frmtitle',pos.left,pos.top,480,640,styles);
			$f.hide('frmtitle');
				props = [{"name":"event-activate","value":"title.startup"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"extend","value":"{}"},{"name":"extend","value":"{}"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"true"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"true"},{"name":"sizeable","value":"true"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('frmtitle','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"#223355"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"font-style","value":"normal"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('frmtitle','', styles);
			
			
			options = 'media/title.png';
			$f.add('frmtitle','picturex1','imagex',options,'0','0','32','32');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmtitle"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"extend","value":"{}"},{"name":"bind","value":"false"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('frmtitle','picturex1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#223355"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"border","value":"0px solid #bbb"},{"name":"font-size","value":"10.2pt"},{"name":"height","value":"100%"},{"name":"max-height","value":"460px"},{"name":"pointer-events","value":"inherit"},{"name":"visibility","value":"visible"},{"name":"div.display","value":"block"},{"name":"div.position","value":"relative"},{"name":"div.top","value":"calc(50% - 200px)"}];
				$f.setstyle('frmtitle','picturex1', styles);
			$f.setprop('frmtitle','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('frmtitle').enabled ) { $f.model('frmtitle').create('frmtitle'); }
			$nim.React.build('frmtitle');
			$f.refresh('frmtitle');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'frmtitle'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
					
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					evnt = typeof(AppEvents) != 'undefined' ? 
						(itm[2] || '').nav(AppEvents) : $heap.diagnose['frmtitle'].Events[itm[2]];
					$f.setevent('frmtitle', itm[0], itm[1], evnt);
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['frmtitle'].isLoaded = 1;
				App.Dialog['frmtitle'].isActivated = 0;
				$f.hide('frmtitle');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'frmtitle'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('frmtitle','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('frmtitle','', props);
					styles = [{"name":"body.background-color","value":"#223355"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.overflow","value":"visible"},{"name":"body.padding","value":"90px 50px 50px 50px"},{"name":"body.text-align","value":""},{"name":"body.vertical-align","value":""}];
					$f.setstyle('frmtitle','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('frmtitle', itm.name); }
					});
				
					$f.events('frmtitle', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('frmtitle','','forceshow').toLowerCase() == 'true') $heap.diagnose['frmtitle'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('frmtitle');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'frmtitle'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('frmtitle', 'Activate')(instID, instID.resolveName());
			App.Dialog['frmtitle'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('frmtitle');
		try {
			if ($k.islastform('frmtitle')) { $k.app.unloadwidget('frmtitle'); }
			
			var itm, evtArr = [
				
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('frmtitle', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'frmtitle'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('frmtitle', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('frmtitle');
			if (App) {
				var dlgItem = App.Dialog['frmtitle'], 
					dlgCount = App.Dialog['frmtitle'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'frmtitle'}});
			}
		}
		finally {
			App.Dialog['frmtitle'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('frmtitle');
			blCancel = $f.events('frmtitle', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('frmtitle');
			$k.instance.restore();
			$f.events('frmtitle', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'frmtitle'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("frmtitle");
				App.Dialog['frmtitle'].isLoaded = 0;
				App.Dialog['frmtitle'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('frmtitle');
			if ($k.isformloaded('frmtitle') == false) {
				retval = $f.events('frmtitle', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("frmtitle");
			
			// Pull DataModel. 
			$k.instance.save('frmtitle');
			if ($f.model('frmtitle').enabled) { $f.model('frmtitle').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'frmtitle'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['frmtitle'].isActivated) {
				$f.events('frmtitle', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.diagnose['frmtitle'].Code, 'frmtitle');
 
/** Form Template --------------------------------------
 *  NAME: frmmain
 *
 * version: 5.0
 **/
$heap.diagnose['frmmain'] = { };
$heap.diagnose['frmmain'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'frmmain';
			if (!$heap.diagnose[pos.form]) { pos.form = 'frmmain'; }
			
			$k.instance.newform(pos.form, App.Dialog['frmmain']);
			instName = $heap.diagnose[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'frmmain'}});
			}
		}
		finally {
			if (show) { $heap.diagnose[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null | globals.DlgStyles.shadow | globals.DlgStyles.dragable | globals.DlgStyles.sizable );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'480', height:'640'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('frmmain',pos.left,pos.top,480,640,styles);
			$f.hide('frmmain');
				props = [{"name":"event-activate","value":"main.activate"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"extend","value":"{}"},{"name":"extend","value":"{}"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"true"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"true"},{"name":"sizeable","value":"true"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('frmmain','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"#223355"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"font-style","value":"normal"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('frmmain','', styles);
			
			
			$f.add('frmmain','btnrun','button','','161','577','158','30');
				props = [{"name":"event-click","value":"main.startdiagnostic"},{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Run Diagnostic"},{"name":"extend","value":"{}"},{"name":"bind","value":"false"},{"name":"lock-pos","value":"!!!!"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('frmmain','btnrun', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#e2e2e2"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"bold"},{"name":"border-radius","value":"13px"},{"name":"border","value":"1px solid #bbb"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"padding","value":"2px 7.5px"},{"name":"pointer-events","value":"inherit"},{"name":"visibility","value":"visible"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.left","value":"calc(50% - 80px)"},{"name":"div.position","value":"absolute"},{"name":"div.top","value":"93.5%"}];
				$f.setstyle('frmmain','btnrun', styles);
			$f.add('frmmain','results','textarea','','0','0','440','570');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"extend","value":"{}"},{"name":"bind","value":"true"},{"name":"db-key","value":"false"},{"name":"db-name","value":"results"},{"name":"db-type","value":"text"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Diagnostic results..."},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('frmmain','results', props);
				styles = [{"name":"resize","value":"none"},{"name":"overflow-x","value":"hidden"},{"name":"overflow-y","value":"auto"},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"border-radius","value":"13px"},{"name":"border","value":"0.5px solid #bbb"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"16px"},{"name":"height","value":"95%"},{"name":"outline","value":"none"},{"name":"overflow","value":"scroll auto"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"visibility","value":"visible"},{"name":"div.border-radius","value":"13px"},{"name":"div.display","value":"block"},{"name":"div.overflow","value":"hidden"},{"name":"div.padding","value":"0.5px 5px"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','results', styles);
			$f.setprop('frmmain','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('frmmain').enabled ) { $f.model('frmmain').create('frmmain'); }
			$nim.React.build('frmmain');
			$f.refresh('frmmain');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'frmmain'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['btnrun', 'onclick', 'main.startdiagnostic']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					evnt = typeof(AppEvents) != 'undefined' ? 
						(itm[2] || '').nav(AppEvents) : $heap.diagnose['frmmain'].Events[itm[2]];
					$f.setevent('frmmain', itm[0], itm[1], evnt);
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['frmmain'].isLoaded = 1;
				App.Dialog['frmmain'].isActivated = 0;
				$f.hide('frmmain');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'frmmain'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('frmmain','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('frmmain','', props);
					styles = [{"name":"body.background-color","value":"RGBA(20,20,20,0.25)"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.overflow","value":"visible"},{"name":"body.padding","value":"20px 20px 20px 20px"},{"name":"body.text-align","value":""},{"name":"body.vertical-align","value":""}];
					$f.setstyle('frmmain','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('frmmain', itm.name); }
					});
				
					$f.events('frmmain', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('frmmain','','forceshow').toLowerCase() == 'true') $heap.diagnose['frmmain'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('frmmain');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'frmmain'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('frmmain', 'Activate')(instID, instID.resolveName());
			App.Dialog['frmmain'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('frmmain');
		try {
			if ($k.islastform('frmmain')) { $k.app.unloadwidget('frmmain'); }
			
			var itm, evtArr = [
					['btnrun', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('frmmain', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'frmmain'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('frmmain', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('frmmain');
			if (App) {
				var dlgItem = App.Dialog['frmmain'], 
					dlgCount = App.Dialog['frmmain'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'frmmain'}});
			}
		}
		finally {
			App.Dialog['frmmain'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('frmmain');
			blCancel = $f.events('frmmain', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('frmmain');
			$k.instance.restore();
			$f.events('frmmain', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'frmmain'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("frmmain");
				App.Dialog['frmmain'].isLoaded = 0;
				App.Dialog['frmmain'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('frmmain');
			if ($k.isformloaded('frmmain') == false) {
				retval = $f.events('frmmain', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("frmmain");
			
			// Pull DataModel. 
			$k.instance.save('frmmain');
			if ($f.model('frmmain').enabled) { $f.model('frmmain').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'frmmain'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['frmmain'].isActivated) {
				$f.events('frmmain', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.diagnose['frmmain'].Code, 'frmmain');
 
// Create New App Instance -----------------------------
var _config = {
	namespace: 'diagnose',
	login: {id: 'ef127044-689ebd75', email: 'tye.lee@nimble-ide.com'},
	
	multiple: false,
	postbox: false,
	mvc: false,
	
	theme: 'v4.0',
	size: 95546,
	canvas: {width: 2050, height: 1103},
	productname: 'Phone Diagnostic',
	copyright: '(c) 2024',
	compiledon: '08/05/2024 11:27 pm',
	version: '1.0',
	description: 'Created with nimble-ide v5 for Javascript & Cordova!',
	author: 'Tyrone W. Lee',
	email: 'nimblejs@gmail.com',
	homepage: 'https://www.nimble-ide.com',
	startform: 'frmtitle',
	palette: '"color50":"#e1f5fe","color100":"#b3e5fc","color200":"#81d4fa","color300":"#4fc3f7","color400":"#29b6f6","color500":"#03a9f4","color600":"#039be5","color700":"#0288d1","color800":"#0277bd","color900":"#01579b","colora100":"#80d8ff","colora200":"#40c4ff","colora400":"#00b0ff","colora700":"#0091ea","b50":"#fafafa","b100":"#f5f5f5","b200":"#eeeeee","b300":"#e0e0e0","b400":"#bdbdbd","b500":"#9e9e9e","b600":"#757575","b700":"#616161","b800":"#424242","b900":"#212121","br50":"#efebe9","br100":"#d7ccc8","br200":"#bcaaa4","br300":"#a1887f","br400":"#8d6e63","br500":"#795548","br600":"#6d4c41","br700":"#5d4037","br800":"#4e342e","br900":"#3e2723","bg50":"#eceff1","bg100":"#cfd8dc","bg200":"#b0bec5","bg300":"#90a4ae","bg400":"#78909c","bg500":"#607d8b","bg600":"#546e7a","bg700":"#455a64","bg800":"#37474f","bg900":"#263238"',
	
	// METHODS
	dialog: {
		'frmtitle': $k.instance.newobject($heap.diagnose['frmtitle']),
		'frmmain': $k.instance.newobject($heap.diagnose['frmmain']),
	},
	onStartup: function(pos) {
		$heap.diagnose[pos.form].Load(pos);
	},
	onLoadLibs: function() {
// --------------------------------------
// Include Custom Javascript Libraries //
// --------------------------------------

// --------------------------------------
	},
	onClose: function(dlgname) {
	},
	onListeners: function(self) {
		self = self || {};
		/**
		* App Listeners
		* version: 5.0
		**/
		self.KeyPress = function(dlg_name) {
		};
		self.KeyUp = function(dlgname) {
			if (DESKTOP.switching) { return; }
			if (KEYBOARD.isAlt && DESKTOP.currentDesktop != KEYBOARD.Char) {
				if (KEYBOARD.Char >= '0' && KEYBOARD.Char <= defaults.preload.workspaces) {
					DESKTOP.Code.SlideDesktop(DESKTOP.currentDesktop, Number(KEYBOARD.Char));
				}
			}
		};
		self.DragStart = function(dlg_name) {
		};
		self.Drag = function(dlg_name) {
		};
		self.Move = function(dlg_name) {
		};
		self.Minimize = function(dlg_name) {
		};
		self.Maximize = function(dlg_name) {
		};
		self.Restore = function(dlg_name) {
		};
		self.Resize = function(dlg_name) {
			try {
			
			} catch(e) {
			
			} finally {
				$k.app.resizewidgets(dlg_name);
			}
		};
		self.OrientationChange = function() {
			
		};
		self.Orientation = function(event) {
			
		};
		return self;
	},
	onDataModel: function() {
		return [];
	},
	onBindLists: function() {
		return [];
	}
};
AppInst = $k.app.createapp(_config, _config.onListeners);
if (AppInst && AppInst.App.id == -1) {
	AppInst.App.isLoaded = true;
	AppInst.App.isWidget = false;
	AppInst.App.id = $k.instance.getappid();
	AppInst.App.guid = '3f549c1d-5177';
	AppInst.App.name = 'diagnose';
	AppInst.App.startfrm = _config.startform;
	AppInst.App.query = _config.query || {};
	AppInst.App.icon = 'media/icons/app.gif';
	AppInst.New();
	if (!DESKTOP.Code) { DESKTOP.Code = $heap.diagnose.Code; }
}
