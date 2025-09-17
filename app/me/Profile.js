function Avatar({ person, size }) {
    return (
        <img className="avatar"
            src={`https://i.imgur.com/${person.imageId}.jpg`}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default function Profile() {
    return (
        <Card>
            <Avatar person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }} size={500} />
        </Card>
    );
}