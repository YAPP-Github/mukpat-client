import ky from 'ky';
import { useQuery } from '@tanstack/react-query';
import { type Post } from '@/types/data';

const getPosts = () => ky.get('http://localhost:5000/posts').json() as Promise<Post[]>;

const usePostQuery = () => {
	const { data, ...rest } = useQuery<Post[], Error>(['posts'], getPosts);
	return { data: data as Post[], ...rest };
};

export { usePostQuery };
