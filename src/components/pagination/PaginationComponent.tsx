import {FC} from 'react';
import styles from '@/styles/Pagination.module.css';

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    basePath: string;
}

const PaginationComponent: FC<PaginationProps> = ({ currentPage, totalItems, itemsPerPage, basePath }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const createPageUrl = (page: number) => `${basePath}?page=${page}&limit=${itemsPerPage}`;

    return (
        <div className={styles.pagination}>
            <a
                className={styles.paginationButton}
                href={createPageUrl(currentPage - 1)}
                style={{ pointerEvents: currentPage === 0 ? 'none' : 'auto' }}
            >
                Back
            </a>
            <a
                className={styles.paginationButton}
                href={createPageUrl(currentPage + 1)}
                style={{ pointerEvents: currentPage >= totalPages - 1 ? 'none' : 'auto' }}
            >
                Next
            </a>
        </div>
    );
};

export default PaginationComponent;

