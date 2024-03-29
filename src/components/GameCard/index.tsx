import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../theme'
import { styles } from './styles';

export interface GameCardProps {
    id: string;
    title: string;
    bennerUrl: string;
    _count: {
        ads: number
    };
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground
                style={styles.cover}
                source={{ uri: data.bennerUrl }}
            >

                <LinearGradient
                    colors={THEME.COLORS.FOOTER}
                    style={styles.footer}
                >
                    <Text style={styles.name}>
                        {data.title}
                    </Text>

                    <Text style={styles.ads}>
                        {`${data._count.ads} Anúncio(s)`}
                    </Text>
                </LinearGradient>
            </ImageBackground>

        </TouchableOpacity>
    );
}