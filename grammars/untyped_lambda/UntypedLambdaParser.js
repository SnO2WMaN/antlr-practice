// Generated from /home/sno2wman/src/ghq/github.com/SnO2WMaN/antlr-practice/grammars/untyped_lambda/UntypedLambda.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import UntypedLambdaListener from './UntypedLambdaListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\t&\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0006\u0002",
    "\u000e\n\u0002\r\u0002\u000e\u0002\u000f\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006$\n\u0006\u0003",
    "\u0006\u0002\u0002\u0007\u0002\u0004\u0006\b\n\u0002\u0002\u0002#\u0002",
    "\r\u0003\u0002\u0002\u0002\u0004\u0013\u0003\u0002\u0002\u0002\u0006",
    "\u0015\u0003\u0002\u0002\u0002\b\u001a\u0003\u0002\u0002\u0002\n#\u0003",
    "\u0002\u0002\u0002\f\u000e\u0005\n\u0006\u0002\r\f\u0003\u0002\u0002",
    "\u0002\u000e\u000f\u0003\u0002\u0002\u0002\u000f\r\u0003\u0002\u0002",
    "\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010\u0011\u0003\u0002\u0002",
    "\u0002\u0011\u0012\u0007\u0002\u0002\u0003\u0012\u0003\u0003\u0002\u0002",
    "\u0002\u0013\u0014\u0007\b\u0002\u0002\u0014\u0005\u0003\u0002\u0002",
    "\u0002\u0015\u0016\u0007\u0003\u0002\u0002\u0016\u0017\u0005\u0004\u0003",
    "\u0002\u0017\u0018\u0007\u0004\u0002\u0002\u0018\u0019\u0005\n\u0006",
    "\u0002\u0019\u0007\u0003\u0002\u0002\u0002\u001a\u001b\u0007\u0005\u0002",
    "\u0002\u001b\u001c\u0005\n\u0006\u0002\u001c\u001d\u0007\u0006\u0002",
    "\u0002\u001d\u001e\u0005\n\u0006\u0002\u001e\u001f\u0007\u0007\u0002",
    "\u0002\u001f\t\u0003\u0002\u0002\u0002 $\u0005\u0004\u0003\u0002!$\u0005",
    "\u0006\u0004\u0002\"$\u0005\b\u0005\u0002# \u0003\u0002\u0002\u0002",
    "#!\u0003\u0002\u0002\u0002#\"\u0003\u0002\u0002\u0002$\u000b\u0003\u0002",
    "\u0002\u0002\u0004\u000f#"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class UntypedLambdaParser extends antlr4.Parser {

    static grammarFileName = "UntypedLambda.g4";
    static literalNames = [ null, "'\u03BB'", "'.'", "'('", "' '", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, "VARIABLE", 
                             "WS" ];
    static ruleNames = [ "file", "vari", "func", "appl", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = UntypedLambdaParser.ruleNames;
        this.literalNames = UntypedLambdaParser.literalNames;
        this.symbolicNames = UntypedLambdaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, UntypedLambdaParser.RULE_file);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.expr();
	            this.state = 13; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << UntypedLambdaParser.T__0) | (1 << UntypedLambdaParser.T__2) | (1 << UntypedLambdaParser.VARIABLE))) !== 0));
	        this.state = 15;
	        this.match(UntypedLambdaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vari() {
	    let localctx = new VariContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, UntypedLambdaParser.RULE_vari);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.match(UntypedLambdaParser.VARIABLE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func() {
	    let localctx = new FuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, UntypedLambdaParser.RULE_func);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.match(UntypedLambdaParser.T__0);
	        this.state = 20;
	        this.vari();
	        this.state = 21;
	        this.match(UntypedLambdaParser.T__1);
	        this.state = 22;
	        this.expr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	appl() {
	    let localctx = new ApplContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, UntypedLambdaParser.RULE_appl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(UntypedLambdaParser.T__2);
	        this.state = 25;
	        this.expr();
	        this.state = 26;
	        this.match(UntypedLambdaParser.T__3);
	        this.state = 27;
	        this.expr();
	        this.state = 28;
	        this.match(UntypedLambdaParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, UntypedLambdaParser.RULE_expr);
	    try {
	        this.state = 33;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case UntypedLambdaParser.VARIABLE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.vari();
	            break;
	        case UntypedLambdaParser.T__0:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.func();
	            break;
	        case UntypedLambdaParser.T__2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this.appl();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

UntypedLambdaParser.EOF = antlr4.Token.EOF;
UntypedLambdaParser.T__0 = 1;
UntypedLambdaParser.T__1 = 2;
UntypedLambdaParser.T__2 = 3;
UntypedLambdaParser.T__3 = 4;
UntypedLambdaParser.T__4 = 5;
UntypedLambdaParser.VARIABLE = 6;
UntypedLambdaParser.WS = 7;

UntypedLambdaParser.RULE_file = 0;
UntypedLambdaParser.RULE_vari = 1;
UntypedLambdaParser.RULE_func = 2;
UntypedLambdaParser.RULE_appl = 3;
UntypedLambdaParser.RULE_expr = 4;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UntypedLambdaParser.RULE_file;
    }

	EOF() {
	    return this.getToken(UntypedLambdaParser.EOF, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof UntypedLambdaListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UntypedLambdaListener ) {
	        listener.exitFile(this);
		}
	}


}



class VariContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UntypedLambdaParser.RULE_vari;
    }

	VARIABLE() {
	    return this.getToken(UntypedLambdaParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UntypedLambdaListener ) {
	        listener.enterVari(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UntypedLambdaListener ) {
	        listener.exitVari(this);
		}
	}


}



class FuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UntypedLambdaParser.RULE_func;
    }

	vari() {
	    return this.getTypedRuleContext(VariContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UntypedLambdaListener ) {
	        listener.enterFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UntypedLambdaListener ) {
	        listener.exitFunc(this);
		}
	}


}



class ApplContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UntypedLambdaParser.RULE_appl;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof UntypedLambdaListener ) {
	        listener.enterAppl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UntypedLambdaListener ) {
	        listener.exitAppl(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UntypedLambdaParser.RULE_expr;
    }

	vari() {
	    return this.getTypedRuleContext(VariContext,0);
	};

	func() {
	    return this.getTypedRuleContext(FuncContext,0);
	};

	appl() {
	    return this.getTypedRuleContext(ApplContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UntypedLambdaListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UntypedLambdaListener ) {
	        listener.exitExpr(this);
		}
	}


}




UntypedLambdaParser.FileContext = FileContext; 
UntypedLambdaParser.VariContext = VariContext; 
UntypedLambdaParser.FuncContext = FuncContext; 
UntypedLambdaParser.ApplContext = ApplContext; 
UntypedLambdaParser.ExprContext = ExprContext; 
