export default class QueryParser{
	static ParseToQuery(data, query){
		query = '(';
		for (let i = 0, length = data.rules.length; i < length; i++){
			if (!data.rules[i].combinator){
				query += `${data.rules[i].field} ${data.rules[i].operator} ${data.rules[i].value}`;
				if (i !== length - 1 && !data.rules[i+1].combinator){
					query += data.combinator + ' ';
				}
			}
			else{
				query += ` ${data.combinator} ${this.ParseToQuery(data.rules[i], query)}`;
			}
		}
		return query + ')';
	}
}