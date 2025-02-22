const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.AJAX,
		C3.Plugins.LocalStorage,
		C3.Plugins.Dictionary,
		C3.Plugins.Touch,
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Plugins.TextBox,
		C3.Plugins.Browser,
		C3.Plugins.Keyboard,
		C3.Plugins.List,
		C3.Plugins.Arr,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.zeropad,
		C3.Plugins.System.Exps.right,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Text.Acts.SetFontColor,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Plugins.Touch.Cnds.OnDoubleTapGestureObject,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.System.Exps.len,
		C3.Plugins.Text.Acts.SetWidth,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Cnds.IsOnLayer,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.Plugins.Keyboard.Cnds.OnAnyKey,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Text.Cnds.CompareOpacity,
		C3.Plugins.System.Exps.left,
		C3.Plugins.Text.Exps.Text,
		C3.Plugins.Keyboard.Exps.StringFromKeyCode,
		C3.Plugins.Keyboard.Exps.LastKeyCode,
		C3.Plugins.Browser.Cnds.IsFullscreen,
		C3.Plugins.System.Acts.SubVar
	];
};
self.C3_JsPropNameTable = [
	{state: 0},
	{id: 0},
	{alreadyRed: 0},
	{Text: 0},
	{AJAX: 0},
	{LocalStorage: 0},
	{saveGame: 0},
	{Touch: 0},
	{TiledBackground: 0},
	{Group: 0},
	{bendera: 0},
	{senshu: 0},
	{num: 0},
	{fouls: 0},
	{TextInput: 0},
	{kumite: 0},
	{kumite_base: 0},
	{Menu: 0},
	{logo: 0},
	{menu_button: 0},
	{Browser: 0},
	{Keyboard: 0},
	{sideNameBoxKata: 0},
	{List: 0},
	{dataKelas: 0},
	{dataAtlet: 0},
	{Button: 0},
	{temp_score: 0},
	{tiled: 0},
	{dataKataBoard: 0},
	{winner: 0},
	{dataRankBoard: 0},
	{temp_rankBoard: 0},
	{tiledblack: 0},
	{dataKelasKumite: 0},
	{dataAtletKumite: 0},
	{closedbox: 0},
	{WhatsApp_Image_20241007_at_143643removebgpreview: 0},
	{AO_SCORE: 0},
	{AKA_SCORE: 0},
	{AO_PENALTY: 0},
	{AO_FLAG: 0},
	{AKA_PENALTY: 0},
	{AKA_FLAG: 0},
	{KELAS_NAME: 0},
	{AKA_KONTINGEN: 0},
	{AO_KONTINGEN: 0},
	{AKA_PLAYER: 0},
	{AO_PLAYER: 0},
	{TIMER: 0},
	{TIMER_START: 0},
	{AKA_SENSHU: 0},
	{AO_SENSHU: 0},
	{KATA_STATE: 0},
	{KATA_NAME: 0},
	{KATA_KONTINGEN: 0},
	{KATA_KELAS: 0},
	{state_string: 0},
	{state2: 0},
	{aka_pick_score: 0},
	{ao_pick_score: 0},
	{state_string2: 0}
];

self.InstanceType = {
	Text: class extends self.ITextInstance {},
	AJAX: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	saveGame: class extends self.IDictionaryInstance {},
	Touch: class extends self.IInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Group: class extends self.ISpriteInstance {},
	bendera: class extends self.ISpriteInstance {},
	senshu: class extends self.ISpriteInstance {},
	fouls: class extends self.ISpriteInstance {},
	TextInput: class extends self.ITextInputInstance {},
	kumite: class extends self.ISpriteInstance {},
	kumite_base: class extends self.ISpriteInstance {},
	Menu: class extends self.ISpriteInstance {},
	logo: class extends self.ISpriteInstance {},
	menu_button: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	sideNameBoxKata: class extends self.ISpriteInstance {},
	List: class extends self.IListInstance {},
	dataKelas: class extends self.IArrayInstance {},
	dataAtlet: class extends self.IArrayInstance {},
	Button: class extends self.IButtonInstance {},
	temp_score: class extends self.IArrayInstance {},
	tiled: class extends self.ITiledBackgroundInstance {},
	dataKataBoard: class extends self.IArrayInstance {},
	winner: class extends self.ISpriteInstance {},
	dataRankBoard: class extends self.IArrayInstance {},
	temp_rankBoard: class extends self.IArrayInstance {},
	tiledblack: class extends self.ITiledBackgroundInstance {},
	dataKelasKumite: class extends self.IArrayInstance {},
	dataAtletKumite: class extends self.IArrayInstance {},
	closedbox: class extends self.ISpriteInstance {},
	WhatsApp_Image_20241007_at_143643removebgpreview: class extends self.ISpriteInstance {}
}