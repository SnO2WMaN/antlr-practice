grammar UntypedLambda;

file: expr EOF;

VARIABLE: [a-z];

vari: VARIABLE;
func: 'λ' vari '.' expr;
appl: '(' expr expr ')';

expr: vari | func | appl;

