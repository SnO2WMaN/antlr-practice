grammar Expr;

prog: expr EOF;

INT: [0-9]+;

NEWLINE: [\r\n]+ -> skip;

expr:
	| INT
	| expr ('*' | '/') expr
	| expr ('+' | '-') expr
	| '(' expr ')';

