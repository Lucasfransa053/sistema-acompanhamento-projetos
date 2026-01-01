const db = require("../database/db")

exports.listar = (req, res) => {
    db.all('SELECT * from projetos', [], (err, rows) => {
        if(err){
            return res.status(500).json({erro: err.message});
        }
        res.json(rows);
    });
};


exports.buscarPorId = (req, res) => {
    const { id } = req.params;

    const sql = `SELECT * FROM projetos WHERE id = ?`;

    db.get(sql, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }

        if (!row) {
            return res.status(404).json({ erro: 'Projeto não encontrado' });
        }

        res.json(row);
    });
};





exports.criar = (req, res) => {
   
    const {nome, custo, status} = req.body
   
    if(!nome || !custo || !status){
        return res.status(400).json({erro: 'Campos Obrigatórios'});
    }


    const sql = `INSERT into projetos (nome, custo, status) VALUES (?, ?, ?)`;
    
    db.run(sql, [nome, custo, status], function (err) {
        if(err){
            return res.status(500).json({erro: err.message});
        }
        res.status(201).json({id: this.lastID});
    });
};


exports.atualizar = (req, res) => {
    const {id} = req.params;
    const {nome, custo, status} = req.body;

const sql = `
UPDATE projetos 
SET nome = ?, custo = ?, status = ?
WHERE id = ?
`;

db.run(sql, [nome, custo, status, id], function(err){
    if(err){
        return res.status(500).json({ erro: err.message});
    }
    res.json({messagem: 'Projeto atualizado!'});
});

};

exports.deletar = (req, res) => {
    const {id} = req.params

    db.run(`DELETE FROM projetos WHERE id = ?`, [id], function(err) {
        if(err){
            return res.status(500).json({erro: err.message})
        }
        res.json({messagem: 'Projeto removido!'})
    })
}