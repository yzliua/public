window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = {"dialog":{"textColor":"#2181ed","size":42,"fontFamily":"fzcy","lineSpacing":10,"wordWrap":"true"}};
                generateEUI.skins = undefined;generateEUI.paths['resource/eui_skins/CitySkin.exml'] = window.skins.CitySkin = (function (_super) {
	__extends(CitySkin, _super);
	function CitySkin() {
		_super.call(this);
		this.skinParts = ["twg_0","twg_1","twg_2","group_dog","group_frog","group_player","group_content","group_scene"];
		
		this.height = 1080;
		this.width = 1920;
		this.twg_0_i();
		this.twg_1_i();
		this.twg_2_i();
		this.elementsContent = [this.group_scene_i()];
		
		eui.Binding.$bindProperties(this, ["group_player"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [-196.18],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [495],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, ["group_scene"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, ["group_scene"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [-1920],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, ["group_player"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [495],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, [2666],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, ["group_scene"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [-1920],[],this._Object8,"x");
		eui.Binding.$bindProperties(this, [-3840],[],this._Object9,"x");
		eui.Binding.$bindProperties(this, ["group_player"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [2666],[],this._Object10,"x");
		eui.Binding.$bindProperties(this, [4360.002],[],this._Object11,"x");
	}
	var _proto = CitySkin.prototype;

	_proto.twg_0_i = function () {
		var t = new egret.tween.TweenGroup();
		this.twg_0 = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1300;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto.twg_1_i = function () {
		var t = new egret.tween.TweenGroup();
		this.twg_1 = t;
		t.items = [this._TweenItem3_i(),this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To2_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 3500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set4_i(),this._To3_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 3500;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto.twg_2_i = function () {
		var t = new egret.tween.TweenGroup();
		this.twg_2 = t;
		t.items = [this._TweenItem5_i(),this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set5_i(),this._To4_i()];
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 3500;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set6_i(),this._To5_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 3500;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto.group_scene_i = function () {
		var t = new eui.Group();
		this.group_scene = t;
		t.height = 1080;
		t.width = 5760;
		t.elementsContent = [this._Group1_i(),this.group_content_i(),this._Image4_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "bg1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "bg2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_content_i = function () {
		var t = new eui.Group();
		this.group_content = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.group_dog_i(),this.group_frog_i(),this.group_player_i()];
		return t;
	};
	_proto.group_dog_i = function () {
		var t = new eui.Group();
		this.group_dog = t;
		t.x = 1158.277;
		t.y = 995.379;
		return t;
	};
	_proto.group_frog_i = function () {
		var t = new eui.Group();
		this.group_frog = t;
		t.x = 3269.522;
		t.y = 947.515;
		return t;
	};
	_proto.group_player_i = function () {
		var t = new eui.Group();
		this.group_player = t;
		t.x = -196.178;
		t.y = 1080;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = -120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg3_png";
		t.x = -111.73;
		return t;
	};
	return CitySkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/EndSkin.exml'] = window.skins.EndSkin = (function (_super) {
	__extends(EndSkin, _super);
	function EndSkin() {
		_super.call(this);
		this.skinParts = ["group","btn_restart"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.group_i(),this.btn_restart_i()];
	}
	var _proto = EndSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		return t;
	};
	_proto.btn_restart_i = function () {
		var t = new eui.Image();
		this.btn_restart = t;
		t.horizontalCenter = 0;
		t.source = "btn_restart_png";
		t.verticalCenter = 375.5;
		return t;
	};
	return EndSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game1/Game1ItemSkin.exml'] = window.skins.Game1ItemSkin = (function (_super) {
	__extends(Game1ItemSkin, _super);
	function Game1ItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","lab","group"];
		
		this.height = 163;
		this.width = 203;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Game1ItemSkin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.bg_i(),this.lab_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "game1_opt0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Image();
		this.lab = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "game1_lab0_png";
		return t;
	};
	return Game1ItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game1/Game1Skin.exml'] = window.skins.Game1Skin = (function (_super) {
	__extends(Game1Skin, _super);
	function Game1Skin() {
		_super.call(this);
		this.skinParts = ["twg_in","group_bg","group_mj0","group_mj1","group_mj2","group_mj3","group_sound","lab_question","lab_question_idx","group_question"];
		
		this.height = 1080;
		this.width = 1920;
		this.twg_in_i();
		this.elementsContent = [this._Image1_i(),this.group_bg_i(),this.group_mj0_i(),this.group_mj1_i(),this.group_mj2_i(),this.group_mj3_i(),this.group_sound_i(),this.group_question_i()];
		
		eui.Binding.$bindProperties(this, ["group_question"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [-147.798],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [25],[],this._Object2,"y");
	}
	var _proto = Game1Skin.prototype;

	_proto.twg_in_i = function () {
		var t = new egret.tween.TweenGroup();
		this.twg_in = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 550;
		t.ease = "backInOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "game1_preview_jpg";
		t.visible = true;
		return t;
	};
	_proto.group_bg_i = function () {
		var t = new eui.Group();
		this.group_bg = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_mj0_i = function () {
		var t = new eui.Group();
		this.group_mj0 = t;
		t.x = 0;
		t.y = 296.262;
		return t;
	};
	_proto.group_mj1_i = function () {
		var t = new eui.Group();
		this.group_mj1 = t;
		t.x = 0;
		t.y = 644.245;
		return t;
	};
	_proto.group_mj2_i = function () {
		var t = new eui.Group();
		this.group_mj2 = t;
		t.x = 1910.692;
		t.y = 309.552;
		return t;
	};
	_proto.group_mj3_i = function () {
		var t = new eui.Group();
		this.group_mj3 = t;
		t.x = 1909.864;
		t.y = 636.092;
		return t;
	};
	_proto.group_sound_i = function () {
		var t = new eui.Group();
		this.group_sound = t;
		t.x = 956.72;
		t.y = 868.57;
		return t;
	};
	_proto.group_question_i = function () {
		var t = new eui.Group();
		this.group_question = t;
		t.visible = true;
		t.x = 461.3;
		t.y = 24.57;
		t.elementsContent = [this._Image2_i(),this.lab_question_i(),this.lab_question_idx_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "game1_bg_png";
		t.visible = true;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_question_i = function () {
		var t = new eui.Label();
		this.lab_question = t;
		t.fontFamily = "fzcy";
		t.horizontalCenter = 63.5;
		t.size = 66;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x0092E1;
		t.verticalAlign = "middle";
		t.verticalCenter = -6.5;
		t.width = 831.803;
		return t;
	};
	_proto.lab_question_idx_i = function () {
		var t = new eui.Label();
		this.lab_question_idx = t;
		t.fontFamily = "fzcy";
		t.horizontalCenter = -461.5;
		t.size = 66;
		t.text = "1/4";
		t.textAlign = "center";
		t.textColor = 0x0092E1;
		t.verticalAlign = "middle";
		t.verticalCenter = -6.5;
		t.x = 183;
		return t;
	};
	return Game1Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game2/Game2CandySkin.exml'] = window.skins.Game2CandySkin = (function (_super) {
	__extends(Game2CandySkin, _super);
	function Game2CandySkin() {
		_super.call(this);
		this.skinParts = ["bg","lab","group"];
		
		this.height = 143;
		this.width = 228;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Game2CandySkin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 114;
		t.anchorOffsetY = 71.5;
		t.height = 143;
		t.width = 228;
		t.x = 114;
		t.y = 71.5;
		t.elementsContent = [this.bg_i(),this.lab_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 114;
		t.anchorOffsetY = 71.5;
		t.source = "game2_opt1_png";
		t.x = 114;
		t.y = 71.5;
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Image();
		this.lab = t;
		t.horizontalCenter = 0;
		t.source = "game2_r_lab1_png";
		t.verticalCenter = 0;
		return t;
	};
	return Game2CandySkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game2/Game2QuestionItemSkin.exml'] = window.skins.Game2QuestionItemSkin = (function (_super) {
	__extends(Game2QuestionItemSkin, _super);
	function Game2QuestionItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","lab","group"];
		
		this.height = 135;
		this.width = 135;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Game2QuestionItemSkin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 135;
		t.width = 135;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this.lab_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "game2_bg1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Image();
		this.lab = t;
		t.horizontalCenter = 0;
		t.source = "game2_r_lab1_png";
		t.verticalCenter = 0;
		return t;
	};
	return Game2QuestionItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game2/Game2Skin.exml'] = window.skins.Game2Skin = (function (_super) {
	__extends(Game2Skin, _super);
	function Game2Skin() {
		_super.call(this);
		this.skinParts = ["twg_question_in","group_bg","group_frog","group_view","lab_question_idx","img_question","word0","word1","word2","group_question"];
		
		this.height = 1080;
		this.width = 1920;
		this.twg_question_in_i();
		this.elementsContent = [this._Image1_i(),this.group_bg_i(),this.group_frog_i(),this.group_view_i(),this.group_question_i()];
		
		eui.Binding.$bindProperties(this, ["group_question"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [-155],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [15],[],this._Object2,"y");
	}
	var _proto = Game2Skin.prototype;

	_proto.twg_question_in_i = function () {
		var t = new egret.tween.TweenGroup();
		this.twg_question_in = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 550;
		t.ease = "backInOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "game2_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_bg_i = function () {
		var t = new eui.Group();
		this.group_bg = t;
		return t;
	};
	_proto.group_frog_i = function () {
		var t = new eui.Group();
		this.group_frog = t;
		t.x = 1612.443;
		t.y = 753.869;
		return t;
	};
	_proto.group_view_i = function () {
		var t = new eui.Group();
		this.group_view = t;
		t.height = 890.293;
		t.horizontalCenter = -38;
		t.top = 0;
		t.width = 1119.776;
		return t;
	};
	_proto.group_question_i = function () {
		var t = new eui.Group();
		this.group_question = t;
		t.x = 539;
		t.y = 15;
		t.elementsContent = [this._Image2_i(),this.lab_question_idx_i(),this.img_question_i(),this.word0_i(),this.word1_i(),this.word2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "game2_bg4_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_question_idx_i = function () {
		var t = new eui.Label();
		this.lab_question_idx = t;
		t.fontFamily = "fzcy";
		t.horizontalCenter = -344.5;
		t.size = 66;
		t.text = "1/4";
		t.textAlign = "center";
		t.textColor = 0x0092E1;
		t.verticalAlign = "middle";
		t.verticalCenter = -6;
		t.x = 183;
		return t;
	};
	_proto.img_question_i = function () {
		var t = new eui.Image();
		this.img_question = t;
		t.horizontalCenter = -167;
		t.source = "game2_q2_png";
		t.verticalCenter = -8;
		return t;
	};
	_proto.word0_i = function () {
		var t = new Game2QuestionItem();
		this.word0 = t;
		t.left = 360;
		t.skinName = "skins.Game2QuestionItemSkin";
		t.verticalCenter = -7.5;
		return t;
	};
	_proto.word1_i = function () {
		var t = new Game2QuestionItem();
		this.word1 = t;
		t.left = 505;
		t.skinName = "skins.Game2QuestionItemSkin";
		t.verticalCenter = -7.5;
		return t;
	};
	_proto.word2_i = function () {
		var t = new Game2QuestionItem();
		this.word2 = t;
		t.left = 645;
		t.skinName = "skins.Game2QuestionItemSkin";
		t.verticalCenter = -7.5;
		return t;
	};
	return Game2Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoadingSkin.exml'] = window.skins.LoadingSkin = (function (_super) {
	__extends(LoadingSkin, _super);
	function LoadingSkin() {
		_super.call(this);
		this.skinParts = ["dongGroup","lab"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.dongGroup_i(),this.lab_i()];
	}
	var _proto = LoadingSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fillAlpha = 1;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.dongGroup_i = function () {
		var t = new eui.Group();
		this.dongGroup = t;
		t.x = 960;
		t.y = 680;
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "loading 100%";
		t.textColor = 0x168bf3;
		t.y = 718.3;
		return t;
	};
	return LoadingSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/StartSkin.exml'] = window.skins.StartSkin = (function (_super) {
	__extends(StartSkin, _super);
	function StartSkin() {
		_super.call(this);
		this.skinParts = ["group","btn_start"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.group_i(),this.btn_start_i()];
	}
	var _proto = StartSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg0_png";
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Image();
		this.btn_start = t;
		t.anchorOffsetX = 76.44;
		t.anchorOffsetY = 78.138;
		t.source = "btn_start_png";
		t.x = 953.396;
		t.y = 727.252;
		return t;
	};
	return StartSkin;
})(eui.Skin);