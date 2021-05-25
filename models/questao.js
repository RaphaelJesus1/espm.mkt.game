const Sql = require('../infra/sql')

class Questao{

     async listar() {
        let lista = null;
        await Sql.conectar(async (sql) => {
            lista = await sql.query("select a.id_questao, q.nome_questao, a.id_alternativa, a.desc_alternativa, a.pontos, c.id_categoria, c.nome_categoria from alternativa a inner join questao q on q.id_questao = a.id_questao inner join categoria c on c.id_categoria = q.id_categoria");
        });
        return lista;
    }
}
module.exports = new Questao