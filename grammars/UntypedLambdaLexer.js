// Generated from /home/sno2wman/src/ghq/github.com/SnO2WMaN/antlr-practice/grammars/UntypedLambda.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0007\u0017\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0002\u0002\u0007\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\u0003\u0002\u0003\u0003\u0002",
    "c|\u0002\u0016\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0003\r\u0003",
    "\u0002\u0002\u0002\u0005\u000f\u0003\u0002\u0002\u0002\u0007\u0011\u0003",
    "\u0002\u0002\u0002\t\u0013\u0003\u0002\u0002\u0002\u000b\u0015\u0003",
    "\u0002\u0002\u0002\r\u000e\u0007\u03bd\u0002\u0002\u000e\u0004\u0003",
    "\u0002\u0002\u0002\u000f\u0010\u00070\u0002\u0002\u0010\u0006\u0003",
    "\u0002\u0002\u0002\u0011\u0012\u0007*\u0002\u0002\u0012\b\u0003\u0002",
    "\u0002\u0002\u0013\u0014\u0007+\u0002\u0002\u0014\n\u0003\u0002\u0002",
    "\u0002\u0015\u0016\t\u0002\u0002\u0002\u0016\f\u0003\u0002\u0002\u0002",
    "\u0003\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class UntypedLambdaLexer extends antlr4.Lexer {

    static grammarFileName = "UntypedLambda.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'\u03BB'", "'.'", "'('", "')'" ];
	static symbolicNames = [ null, null, null, null, null, "VARIABLE" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "VARIABLE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

UntypedLambdaLexer.EOF = antlr4.Token.EOF;
UntypedLambdaLexer.T__0 = 1;
UntypedLambdaLexer.T__1 = 2;
UntypedLambdaLexer.T__2 = 3;
UntypedLambdaLexer.T__3 = 4;
UntypedLambdaLexer.VARIABLE = 5;



