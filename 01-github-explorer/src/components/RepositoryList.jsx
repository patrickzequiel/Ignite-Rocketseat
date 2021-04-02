import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
    name: 'unform',
    descrption: 'Forms in React',
    link: 'https://gihub.com/unform/unform'
}

export function RepositoryList() {
    return (
        <section className='repository-List'>
            <h1>Lista de repositório</h1>

            <ul>
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}