import { LRParser } from '@lezer/lr';
import { LRLanguage, indentNodeProp, delimitedIndent, foldNodeProp, foldInside, LanguageSupport } from '@codemirror/language';
import { styleTags, tags } from '@lezer/highlight';

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_Ident = {__proto__:null,fn:12, return:30, if:38, else:40, true:48, false:48, exit:56, as:76, int:80, float:80, bool:80, char:80, break:84, continue:88, let:92, mut:94, loop:100, while:104, for:108};
const parser = LRParser.deserialize({
  version: 14,
  states: "/YQ]QPOOOOQO'#Dn'#DnOOQO'#Dg'#DgQ]QPOOOeQPO'#DZOmQPO'#C`OOQO-E7e-E7eOrQPO,59uOzQPO,59uO!PQPO,58zO!UQPO1G/aO!sQPO1G/aO!xQPO1G/aO#QQPO'#CcO#YQPO1G.fOOQO'#Cm'#CmOOQO'#Cs'#CsOOQO'#Cw'#CwOOQO'#Cv'#CvO#_QQO'#CvO!UQPO'#CyO$xQQO7+${O%TQQO'#CqOOQO'#Cq'#CqO!UQPO'#CqOOQO'#Cl'#ClO&kQPO'#CgO!UQPO'#CnOOQO'#DT'#DTO'XQPO7+${O!UQPO7+${O!sQPO7+${OOQO,58},58}O'^QPO,58}OOQO7+$Q7+$QO!UQPO,59iOOQO,59e,59eO!UQPO,59gO!sQPO,59mOOQO<<Hg<<HgO'fQPO,59kO'mQQO,59]O'xQQO,59RO(TQQO'#ClO)eQQO'#ClOOQO'#Ci'#CiOOQO'#Di'#DiO)sQPO,59ROOQO,59R,59ROOQO'#Cj'#CjOOQO'#DV'#DVOOQO'#DX'#DXO#YQPO'#D_O!UQPO'#DaO*aQPO'#DcO*fQQO,59YO!UQPO<<HgO*qQQO<<HgO*|QPO<<HgO+RQPO'#DhO+WQPO1G.iOOQO1G.i1G.iO+`QQO1G/TOOQO1G/R1G/ROOQO1G/X1G/XO,vQQO'#DQOOQO1G/V1G/VO-UQPO1G/VOOQO1G.w1G.wOOQO1G.m1G.mOOQO,5:P,5:PO-ZQQO1G.mOOQO-E7g-E7gP-fQQO,59UO.sQPO,59yO*fQQO,59{O/}QPO,59}O0SQQO1G.tO1mQQOAN>ROOQOAN>RAN>RO!UQPOAN>ROOQO,5:S,5:SOOQO-E7f-E7fOOQO7+$T7+$TO1xQPO,59lO2PQPO,59lOOQO7+$q7+$qOOQO7+$X7+$XP'pQQO'#C{OOQO1G/e1G/eO2XQPO1G/gO!UQPO1G/iO3cQPO7+$`OOQOG23mG23mO3kQQOG23mO3vQQO,5:UO4UQPO1G/WOOQO-E7h-E7hOOQO7+%R7+%RO4]QQO7+%TOOQO<<Gz<<GzOOQOLD)XLD)XP!UQPO'#DjO!UQPO<<HoO4hQQOAN>ZO!UQPOG23uO*fQQOLD)aO4sQPO!$'L{OOQO!)9Bg!)9Bg",
  stateData: "6Q~O!aOSPOSQOS~OUTO!OSO~OTVO!PWO~OTXO~O!cZO!dYO~OT[O~OW]O~OTcOWhO[jOckOfgOh`OigOlaOndO~OxlO~O!coO!dnO~OTqOYpO~O[jO~OrsOWjXpjXvjX!QjXYjX!YjX[jXXjXTjX_jXcjXfjXhjXijXljXnjXzjX|jX!OjX!SjX!UjX!WjX~OpuOvvO!QwO~OWxOpeXveX!QeXYeX!YeX[eXXeXTeX_eXceXfeXheXieXleXneXzeX|eX!OeX!SeX!UeX!WeX~O_!ROz!SO|!TO!OSO!S!UO!U!VO!W!WO!Y!QO~P!UO!d!YO~OX!]OY!_O~OY!dO~P!UOY!fOpuOvvO~OpuOvvO!Y!gO~O!Q!hOT!XXW!XX[!XX_!XXc!XXf!XXh!XXi!XXl!XXn!XXp`Xv`Xz!XX|!XX!O!XX!S!XX!U!XX!W!XX!Y!XX~O!Q!hOp`Xv`X!Y`X~O_!ROz!SO|!TO!OSO!S!UO!U!VO!W!WO!Y!gO~P!UOT!nO~O[jOpuOvvO~OpuOvvO!Q!qO~O!d!rO~OT!sO~OX!]OY!uO~OpuOvqi!QqiYqi!Yqi[qiXqiTqiWqi_qicqifqihqiiqilqinqizqi|qi!Oqi!Sqi!Uqi!Wqi~OX!vOpuOvvOYtX~OY!xO~OpuOvvO!Y!yO~OpuOvvOT^aW^a[^a_^ac^af^ah^ai^al^an^az^a|^a!O^a!S^a!U^a!W^a!Y^a~O!Q!{OT!RaW!Ra[!Ra_!Rac!Raf!Rah!Rai!Ral!Ran!Raz!Ra|!Ra!O!Ra!S!Ra!U!Ra!W!Ra!Y!Ra~O!d!}O~Od#OOpbivbi!QbiYbiTbiWbi[bi_bicbifbihbiibilbinbizbi|bi!Obi!Sbi!Ubi!Wbi!YbiXbi~OpuOvvO!Q#PO~OYta~P!UOX#SOYta~O!Q#UOT!TiW!Ti[!Ti_!Tic!Tif!Tih!Tii!Til!Tin!Tiz!Ti|!Ti!O!Ti!S!Ti!U!Ti!W!Ti!Y!Ti~O[jOckO~OpuOvvO!Q#XO~OpuOvvOX!^aY!^a~OYti~P!UOpuOvvO!Q#ZO~OpuOvvO!Q#]O~O!Q#`OT!V!kW!V!k[!V!k_!V!kc!V!kf!V!kh!V!ki!V!kl!V!kn!V!kz!V!k|!V!k!O!V!k!S!V!k!U!V!k!W!V!k!Y!V!k~Orp~",
  goto: "(p!cPPPP!dPP!hPPP!kP#d#hP#l$s%[PP%tP&]PP&r'XP&]P&]P&]P&]'n&]P'qP#hP#hP'zPPP#hP#hP#hP#hP(S(Y(`(fPPP(lTPORR^Xv_Ydhjknsux!P!V!Y!r!v!}#S#Y#Z#]Qr^Q!l!UQ!o!XQ!|!mQ#W#OR#_#^T!Oj!PT}j!PQeYQtdQyhQzjQ!XkQ!ZnQ!`sQ!auQ!cxQ!i!PQ!m!VQ!p!YQ#Q!rU#R!v#S#YQ#V!}Q#[#ZR#^#]riYdhknsux!V!Y!r!v!}#S#Y#Z#]T{j!Pv_Ydhjknsux!P!V!Y!r!v!}#S#Y#Z#]R#W#OriYdhknsux!V!Y!r!v!}#S#Y#Z#]T|j!PwgYdhjknsux!P!V!Y!r!v!}#S#Y#Z#]wfYdhjknsux!P!V!Y!r!v!}#S#Y#Z#]wbYdhjknsux!P!V!Y!r!v!}#S#Y#Z#]R!exQmZQ![oR!bvSPORT}j!PQRORURQ!^qR!t!^Q!PjR!j!PQ!w!cR#T!wTQOR",
  nodeNames: "⚠ LineComment BlockComment Program FunctionDefinition Ident fn Parameters ( , ) Block { Statement ReturnStmt return Expression ExprWithBlock IfExpr if else ExprWithoutBlock Number Bool Bool Char VariableName BuiltinFunc BuiltinFunc PrefixExpr PrefixOp InfixExpr InfixOp AssignExpr AssignOp CallExpr ArgumentList CastExpr as Type Type BreakStmt break ContinueStmt continue LetStmt let mut ; LoopStmt loop WhileStmt while ForStmt for ExprStmt }",
  maxTerm: 66,
  skippedNodes: [0,1,2],
  repeatNodeCount: 4,
  tokenData: "*p~RlXY!yYZ!y]^!ypq!yqr#Ouv#]vw#jwx#uxy%gyz%lz{%q{|#]|}%|}!O&R!P!Q&]!Q![(Z![!](|!]!^)R!^!_)W!_!`)c!`!a)m!c!})x#Q#R#]#R#S)x#T#o)x#o#p*Z#p#q*`#q#r*k~#OO!a~~#TPn~!_!`#WQ#]OpQQ#bPpQ!_!`#eQ#jOrQQ#oQpQvw#W!_!`#e~#zVi~Ow#uwx$ax#O#u#O#P$f#P;'S#u;'S;=`%a<%lO#u~$fOi~~$iRO;'S#u;'S;=`$r;=`O#u~$wWi~Ow#uwx$ax#O#u#O#P$f#P;'S#u;'S;=`%a;=`<%l#u<%lO#u~%dP;=`<%l#u~%lOW~~%qOY~Q%vQpQz{#]!_!`#e~&ROX~~&YPn~pQ!_!`#e~&bRpQz{&k!P!Q'r!_!`#e~&nTOz&kz{&}{;'S&k;'S;=`'l<%lO&k~'QVOz&kz{&}{!P&k!P!Q'g!Q;'S&k;'S;=`'l<%lO&k~'lOQ~~'oP;=`<%l&k~'wSP~OY'rZ;'S'r;'S;=`(T<%lO'r~(WP;=`<%l'r~(`Rf~!O!P(i!Q![(Z#Y#Z(w~(lP!Q![(o~(tPf~!Q![(o~(|Of~~)RO!c~~)WO!Q~Q)]QpQ!^!_#]!_!`#WR)jP!dPrQ!_!`#WQ)rQpQ!_!`#W!`!a#]~)}ST~!Q![)x!c!})x#R#S)x#T#o)x~*`O[~Q*eQpQ!_!`#e#p#q#W~*pO!Y~",
  tokenizers: [0, 1],
  topRules: {"Program":[0,3]},
  specialized: [{term: 5, get: value => spec_Ident[value] || -1}],
  tokenPrec: 965
});

const rushLanguage = LRLanguage.define({
    parser: parser.configure({
        props: [
            indentNodeProp.add({
                Application: delimitedIndent({ closing: ')', align: false }),
            }),
            foldNodeProp.add({
                Application: foldInside,
            }),
            styleTags({
                'for while loop if else return break continue': tags.controlKeyword,
                in: tags.operatorKeyword,
                'let fn mut': tags.definitionKeyword,
                as: tags.keyword,
                Bool: tags.bool,
                null: tags.null,
                Type: tags.typeName,
                'VariableName/Ident': tags.variableName,
                'CallExpr/VariableName/Ident': tags.function(tags.variableName),
                Property: tags.propertyName,
                'CallExpr/MemberExpr/Property': tags.function(tags.propertyName),
                'FnExpr/Ident': tags.function(tags.variableName),
                'Parameters/Ident': tags.local(tags.variableName),
                LineComment: tags.lineComment,
                BlockComment: tags.blockComment,
                Number: tags.number,
                Char: tags.character,
                '+ - "*" "/" % "**"': tags.arithmeticOperator,
                '|| &&': tags.logicOperator,
                '< <= > >= "!=" ==': tags.compareOperator,
                '=': tags.definitionOperator,
                '( ) { } [ ]': tags.bracket,
                '. , ;': tags.separator,
                BuiltinFunc: tags.standard(tags.function(tags.variableName)),
                BuiltinVar: tags.standard(tags.variableName),
            }),
        ],
    }),
    languageData: {
        commentTokens: { line: '//' },
    },
});
function rush() {
    return new LanguageSupport(rushLanguage);
}

export { rush, rushLanguage };