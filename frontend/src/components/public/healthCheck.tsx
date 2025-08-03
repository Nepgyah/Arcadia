'use client';
import { useCSRF } from "@/util/api/csrfLoader";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function HealthCheck() {
    const {
        csrfToken
      } = useCSRF()
    return (
        <div className="health-check">
            <h4>Status</h4>
            <div>
                <p>Arcadia API: <span className={csrfToken ? 'online' : 'offline'}>{csrfToken ? 'Online' : 'Offline'}</span></p>
            </div>
            <div>
                <p>Arcadia Database: <span className={csrfToken ? 'online' : 'offline'}>{csrfToken ? 'Online' : 'Offline'}</span></p>
            </div>
        </div>
    )
}