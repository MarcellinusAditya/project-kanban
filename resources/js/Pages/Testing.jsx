import AppLayout from '@/Layouts/AppLayout';

export default function Testing() {
    return (
        <div>
            <span>This is Testing</span>
        </div>
    );
}
Testing.layout = (page) => <AppLayout children={page} title="Testing" />;
